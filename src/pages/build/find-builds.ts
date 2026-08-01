import { Armour, ArmourType } from "@src/data/Armour";
import { BuildModel, findCellVariantByPerk, findLanternByName } from "@src/data/BuildModel";
import { CellType } from "@src/data/Cell";
import dauntlessBuilderData from "@src/data/Data";
import { ItemRarity } from "@src/data/ItemRarity";
import { Lantern } from "@src/data/Lantern";
import { Perk } from "@src/data/Perks";
import { Weapon, WeaponType } from "@src/data/Weapon";
import { AssignedPerkValue } from "@src/state/finder";
import sortObjectByKeys from "@src/utils/sort-object-by-keys";
import md5 from "md5";

import {
    AvailablePerkValue,
    findAvailablePerksCore,
    findAvailablePerkValuesCore,
    FinderCoreCellsSlotted,
    FinderCoreData,
    FinderCoreItem,
    searchBuildsCore,
} from "./find-builds-core";

// The lantern itself does not affect the search, so keep the historical DB mascot default.
const lanternName = "Shrike's Zeal";
const bondWrapperSeparator = "//";

interface IntermediateBuild {
    arms: IntermediateItem;
    head: IntermediateItem;
    lantern: IntermediateItem;
    legs: IntermediateItem;
    torso: IntermediateItem;
    weapon: IntermediateItem;
}

interface IntermediateItem {
    cellSlots: CellType[];
    name: string;
    perks: string[];
}

interface CellsSlottedMap {
    arms: (string | null)[];
    head: (string | null)[];
    lantern: (string | null)[];
    legs: (string | null)[];
    torso: (string | null)[];
    weapon: (string | null)[];
}

export interface MatchingBuild {
    build: IntermediateBuild;
    cellsSlotted: CellsSlottedMap;
    ident: string;
    perks: AssignedPerkValue;
}

export interface FinderItemData {
    lantern: Lantern;
    weapons: Weapon[];
}

export const perks = (() => {
    const perkByType = {
        [CellType.Alacrity]: [] as Perk[],
        [CellType.Brutality]: [] as Perk[],
        [CellType.Finesse]: [] as Perk[],
        [CellType.Fortitude]: [] as Perk[],
        [CellType.Insight]: [] as Perk[],
    };

    Object.values(dauntlessBuilderData.perks).forEach(perk => {
        perkByType[perk.type as keyof typeof perkByType].push(perk);
    });
    return perkByType;
})();

export const perkCellMap = (() => {
    const result: Record<string, CellType> = {};
    Object.values(dauntlessBuilderData.perks).forEach(perk => {
        result[perk.name] = perk.type;
    });
    return result;
})();

export interface FinderItemDataOptions {
    pickerArms?: Armour | null;
    pickerHead?: Armour | null;
    pickerLegs?: Armour | null;
    pickerTorso?: Armour | null;
    pickerWeapon?: Weapon | null;
    removeExotics?: boolean;
    removeLegendary?: boolean;
}

const defaultFinderItemDataOptions: Required<FinderItemDataOptions> = {
    pickerArms: null,
    pickerHead: null,
    pickerLegs: null,
    pickerTorso: null,
    pickerWeapon: null,
    removeExotics: true,
    removeLegendary: true,
};

const normalizedOptions = (options: FinderItemDataOptions): Required<FinderItemDataOptions> => ({
    ...defaultFinderItemDataOptions,
    ...options,
});

export const findArmourPiecesByType = (type: ArmourType, options: FinderItemDataOptions = {}) => {
    const finderOptions = normalizedOptions(options);
    return Object.values(dauntlessBuilderData.armours)
        .filter(armourPiece => armourPiece.type === type)
        .filter(armourPiece => !finderOptions.removeExotics || armourPiece.rarity !== ItemRarity.Exotic)
        .sort((left, right) => left.name.localeCompare(right.name));
};

const createItemData = (weaponType: WeaponType | null, options: FinderItemDataOptions): FinderItemData => {
    const finderOptions = normalizedOptions(options);

    const createLegendaryWeaponBondWrapper = (weapon: Weapon): Weapon => {
        if (
            finderOptions.removeLegendary ||
            (finderOptions.pickerWeapon && finderOptions.pickerWeapon.bond === undefined)
        ) {
            return weapon;
        }
        if (weapon.rarity === ItemRarity.Exotic) {
            return weapon;
        }
        const legendaryWeapon = Object.values(dauntlessBuilderData.weapons).find(
            candidate => candidate.type === weaponType && candidate.bond?.elemental === weapon.elemental,
        );
        if (!legendaryWeapon) {
            return weapon;
        }
        return {
            ...legendaryWeapon,
            name: `${legendaryWeapon.name}${bondWrapperSeparator}${weapon.name}`,
            perks: weapon.perks,
        };
    };

    const weapons = Object.values(dauntlessBuilderData.weapons)
        .filter(weapon => weapon.type === weaponType)
        .filter(weapon => weapon.bond === undefined)
        .filter(weapon => !finderOptions.removeExotics || weapon.rarity !== ItemRarity.Exotic)
        .map(createLegendaryWeaponBondWrapper)
        .filter(weapon => !finderOptions.pickerWeapon || weapon.name.startsWith(finderOptions.pickerWeapon.name))
        .sort((left, right) => left.name.localeCompare(right.name));

    return {
        lantern: findLanternByName(lanternName) as Lantern,
        weapons,
    };
};

type SearchSource = Armour | Lantern | Weapon;

const toCoreItem = <T extends SearchSource>(item: T): FinderCoreItem<SearchSource> => ({
    cellSlots: (item.cells === null ? [] : Array.isArray(item.cells) ? item.cells : [item.cells]) as string[],
    name: item.name,
    perks: "perks" in item ? [...new Set((item.perks ?? []).map(perk => perk.name))] : [],
    source: item,
});

const armourCandidates = (
    type: ArmourType,
    picker: Armour | null,
    options: Required<FinderItemDataOptions>,
): Armour[] => (picker ? [picker] : findArmourPiecesByType(type, options));

const searchDataCache = new Map<string, FinderCoreData<SearchSource>>();

const createSearchData = (
    weaponType: WeaponType | null,
    options: FinderItemDataOptions,
): FinderCoreData<SearchSource> => {
    const finderOptions = normalizedOptions(options);
    const cacheKey = JSON.stringify([
        weaponType,
        finderOptions.removeExotics,
        finderOptions.removeLegendary,
        finderOptions.pickerWeapon?.name,
        finderOptions.pickerHead?.name,
        finderOptions.pickerTorso?.name,
        finderOptions.pickerArms?.name,
        finderOptions.pickerLegs?.name,
    ]);
    const cached = searchDataCache.get(cacheKey);
    if (cached) {
        return cached;
    }
    const itemData = createItemData(weaponType, finderOptions);
    const data: FinderCoreData<SearchSource> = {
        arms: armourCandidates(ArmourType.Arms, finderOptions.pickerArms, finderOptions).map(toCoreItem),
        head: armourCandidates(ArmourType.Head, finderOptions.pickerHead, finderOptions).map(toCoreItem),
        lantern: toCoreItem(itemData.lantern),
        legs: armourCandidates(ArmourType.Legs, finderOptions.pickerLegs, finderOptions).map(toCoreItem),
        torso: armourCandidates(ArmourType.Torso, finderOptions.pickerTorso, finderOptions).map(toCoreItem),
        weapons: itemData.weapons.map(toCoreItem),
    };
    searchDataCache.set(cacheKey, data);
    return data;
};

const toIntermediateItem = (item: FinderCoreItem<SearchSource>): IntermediateItem => ({
    cellSlots: item.cellSlots as CellType[],
    name: item.name,
    perks: item.perks,
});

const createBuildIdentifier = (build: IntermediateBuild, cellsSlotted: CellsSlottedMap): string =>
    md5(
        "build::" +
            Object.keys(sortObjectByKeys(build))
                .map(key => build[key as keyof IntermediateBuild].name)
                .join("::") +
            Object.keys(sortObjectByKeys(cellsSlotted))
                .map(key => cellsSlotted[key as keyof CellsSlottedMap] ?? "Null")
                .join("::"),
    );

export const findBuilds = (
    weaponType: WeaponType | null,
    requestedPerks: AssignedPerkValue,
    maxBuilds: number,
    options: FinderItemDataOptions = {},
): MatchingBuild[] => {
    const data = createSearchData(weaponType, options);
    return searchBuildsCore(data, perkCellMap, requestedPerks, maxBuilds).map(match => {
        const build: IntermediateBuild = {
            arms: toIntermediateItem(match.items.arms),
            head: toIntermediateItem(match.items.head),
            lantern: toIntermediateItem(match.items.lantern),
            legs: toIntermediateItem(match.items.legs),
            torso: toIntermediateItem(match.items.torso),
            weapon: toIntermediateItem(match.items.weapon),
        };
        const cellsSlotted = match.cellsSlotted as FinderCoreCellsSlotted as CellsSlottedMap;
        return {
            build,
            cellsSlotted,
            ident: createBuildIdentifier(build, cellsSlotted),
            perks: match.perks,
        };
    });
};

export const findAvailablePerks = (
    weaponType: WeaponType | null,
    requestedPerks: AssignedPerkValue,
    perksToAdd: string[],
    options: FinderItemDataOptions = {},
): Record<string, boolean> =>
    findAvailablePerksCore(createSearchData(weaponType, options), perkCellMap, requestedPerks, perksToAdd);

// Highest total rank that can coexist with the current request. For an already
// selected +3 perk, 3 means it fits but cannot be upgraded and 6 means it can.
export const findAvailablePerkValues = (
    weaponType: WeaponType | null,
    requestedPerks: AssignedPerkValue,
    perksToAdd: string[],
    options: FinderItemDataOptions = {},
): Record<string, AvailablePerkValue> =>
    findAvailablePerkValuesCore(createSearchData(weaponType, options), perkCellMap, requestedPerks, perksToAdd);

export const convertFindBuildResultsToBuildModel = (matchingBuilds: MatchingBuild[]) =>
    matchingBuilds.map(intermediateBuild => {
        const build = new BuildModel();
        let weaponName = intermediateBuild.build.weapon.name;
        let bondWeapon = null;

        if (weaponName.includes(bondWrapperSeparator)) {
            [weaponName, bondWeapon] = weaponName.split(bondWrapperSeparator);
        }

        build.weaponName = weaponName;
        build.weaponSurged = true;
        build.weaponCell1 = findCellVariantByPerk(intermediateBuild.cellsSlotted.weapon[0]);
        build.weaponCell2 = findCellVariantByPerk(intermediateBuild.cellsSlotted.weapon[1]);
        build.bondWeapon = bondWeapon;
        build.headName = intermediateBuild.build.head.name;
        build.headSurged = true;
        build.headCell = findCellVariantByPerk(intermediateBuild.cellsSlotted.head[0]);
        build.torsoName = intermediateBuild.build.torso.name;
        build.torsoSurged = true;
        build.torsoCell = findCellVariantByPerk(intermediateBuild.cellsSlotted.torso[0]);
        build.armsName = intermediateBuild.build.arms.name;
        build.armsSurged = true;
        build.armsCell = findCellVariantByPerk(intermediateBuild.cellsSlotted.arms[0]);
        build.legsName = intermediateBuild.build.legs.name;
        build.legsSurged = true;
        build.legsCell = findCellVariantByPerk(intermediateBuild.cellsSlotted.legs[0]);
        build.lantern = intermediateBuild.build.lantern.name;
        build.lanternCell = findCellVariantByPerk(intermediateBuild.cellsSlotted.lantern[0]);
        return build;
    });
