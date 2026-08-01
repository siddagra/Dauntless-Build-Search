export interface FinderCoreItem<T = unknown> {
    cellSlots: string[];
    name: string;
    perks: string[];
    source: T;
}

export interface FinderCoreData<T = unknown> {
    arms: FinderCoreItem<T>[];
    head: FinderCoreItem<T>[];
    lantern: FinderCoreItem<T>;
    legs: FinderCoreItem<T>[];
    torso: FinderCoreItem<T>[];
    weapons: FinderCoreItem<T>[];
}

export interface FinderCoreCellsSlotted {
    arms: (string | null)[];
    head: (string | null)[];
    lantern: (string | null)[];
    legs: (string | null)[];
    torso: (string | null)[];
    weapon: (string | null)[];
}

export interface FinderCoreMatch<T = unknown> {
    cellsSlotted: FinderCoreCellsSlotted;
    items: {
        arms: FinderCoreItem<T>;
        head: FinderCoreItem<T>;
        lantern: FinderCoreItem<T>;
        legs: FinderCoreItem<T>;
        torso: FinderCoreItem<T>;
        weapon: FinderCoreItem<T>;
    };
    perks: Record<string, number>;
}

interface SearchDimensions {
    bonusPerkNames: string[];
    cellTypes: string[];
    perkCellIndexes: number[];
    perkNames: string[];
    targetUnits: number[];
}

interface ItemSignature<T> {
    bonusInnate: number[];
    contributions: number[];
    item: FinderCoreItem<T>;
    slots: number[];
}

interface PairGroup<T> {
    bonusInnate: number[];
    contributions: number[];
    members: Array<[FinderCoreItem<T>, FinderCoreItem<T>]>;
    slots: number[];
}

interface ItemGroup<T> {
    bonusInnate: number[];
    contributions: number[];
    members: FinderCoreItem<T>[];
    slots: number[];
}

const perkUnits = (value: number): number => Math.ceil(Math.max(0, value) / 3);

const addCapped = (left: number[], right: number[], caps: number[]): number[] =>
    left.map((value, index) => Math.min(caps[index], value + right[index]));

const add = (left: number[], right: number[]): number[] => left.map((value, index) => value + right[index]);

const signatureKey = (contributions: number[], slots: number[]): string =>
    `${contributions.join(",")}|${slots.join(",")}`;

const createDimensions = (
    perkTypes: Record<string, string>,
    requestedPerks: Record<string, number>,
    additionallyTrackedPerks: string[] = [],
): SearchDimensions | null => {
    const perkNames = Object.keys(requestedPerks);
    const bonusPerkNames = [...new Set(additionallyTrackedPerks)];
    const cellTypes = [...new Set(Object.values(perkTypes))];
    const perkCellIndexes: number[] = [];

    for (const perkName of perkNames) {
        const cellType = perkTypes[perkName];
        if (!cellType) {
            return null;
        }
        perkCellIndexes.push(cellTypes.indexOf(cellType));
    }
    for (const perkName of bonusPerkNames) {
        if (!perkTypes[perkName]) {
            return null;
        }
    }

    return {
        bonusPerkNames,
        cellTypes,
        perkCellIndexes,
        perkNames,
        targetUnits: perkNames.map(perkName => perkUnits(requestedPerks[perkName] ?? 0)),
    };
};

const createItemSignature = <T>(item: FinderCoreItem<T>, dimensions: SearchDimensions): ItemSignature<T> => {
    const innatePerks = new Set(item.perks);
    return {
        bonusInnate: dimensions.bonusPerkNames.map(perkName => (innatePerks.has(perkName) ? 1 : 0)),
        contributions: dimensions.perkNames.map((perkName, index) =>
            innatePerks.has(perkName) ? Math.min(1, dimensions.targetUnits[index]) : 0,
        ),
        item,
        slots: [
            ...dimensions.cellTypes.map(cellType => item.cellSlots.filter(slot => slot === cellType).length),
            item.cellSlots.filter(slot => slot === "Prismatic").length,
        ],
    };
};

const groupItems = <T>(items: FinderCoreItem<T>[], dimensions: SearchDimensions): ItemGroup<T>[] => {
    const groups = new Map<string, ItemGroup<T>>();
    for (const item of items) {
        const signature = createItemSignature(item, dimensions);
        const key = signatureKey(signature.contributions, signature.slots);
        const current = groups.get(key);
        if (current) {
            current.members.push(item);
            for (let index = 0; index < current.bonusInnate.length; index++) {
                current.bonusInnate[index] = Math.max(current.bonusInnate[index], signature.bonusInnate[index]);
            }
        } else {
            groups.set(key, {
                bonusInnate: signature.bonusInnate,
                contributions: signature.contributions,
                members: [item],
                slots: signature.slots,
            });
        }
    }
    return [...groups.values()];
};

const groupPairs = <T>(
    first: FinderCoreItem<T>[],
    second: FinderCoreItem<T>[],
    dimensions: SearchDimensions,
): PairGroup<T>[] => {
    const firstGroups = groupItems(first, dimensions);
    const secondGroups = groupItems(second, dimensions);
    const groups = new Map<string, PairGroup<T>>();

    for (const firstGroup of firstGroups) {
        for (const secondGroup of secondGroups) {
            const contributions = addCapped(
                firstGroup.contributions,
                secondGroup.contributions,
                dimensions.targetUnits,
            );
            const slots = add(firstGroup.slots, secondGroup.slots);
            const bonusInnate = add(firstGroup.bonusInnate, secondGroup.bonusInnate);
            const key = signatureKey(contributions, slots);
            let group = groups.get(key);
            if (!group) {
                group = { bonusInnate, contributions, members: [], slots };
                groups.set(key, group);
            } else {
                for (let index = 0; index < group.bonusInnate.length; index++) {
                    group.bonusInnate[index] = Math.max(group.bonusInnate[index], bonusInnate[index]);
                }
            }
            for (const firstItem of firstGroup.members) {
                for (const secondItem of secondGroup.members) {
                    group.members.push([firstItem, secondItem]);
                }
            }
        }
    }

    return [...groups.values()];
};

const canFitDemand = (demand: number[], slots: number[]): boolean => {
    let prismaticDemand = 0;
    for (let index = 0; index < demand.length; index++) {
        prismaticDemand += Math.max(0, demand[index] - slots[index]);
    }
    return prismaticDemand <= slots[slots.length - 1];
};

const assignCells = <T>(
    items: FinderCoreMatch<T>["items"],
    perkTypes: Record<string, string>,
    requestedPerks: Record<string, number>,
): { cellsSlotted: FinderCoreCellsSlotted; perks: Record<string, number> } | null => {
    const perks: Record<string, number> = {};
    for (const item of Object.values(items)) {
        for (const perk of new Set(item.perks)) {
            perks[perk] = (perks[perk] ?? 0) + 3;
        }
    }

    const cellsSlotted: FinderCoreCellsSlotted = {
        arms: items.arms.cellSlots.map(() => null),
        head: items.head.cellSlots.map(() => null),
        lantern: items.lantern.cellSlots.map(() => null),
        legs: items.legs.cellSlots.map(() => null),
        torso: items.torso.cellSlots.map(() => null),
        weapon: items.weapon.cellSlots.map(() => null),
    };
    const slotOrder: Array<keyof FinderCoreCellsSlotted> = ["lantern", "head", "torso", "arms", "legs", "weapon"];

    for (const [perkName, desiredValue] of Object.entries(requestedPerks)) {
        // Typed slots are always consumed before prismatic slots. This is not just an
        // optimization: taking an early prismatic slot greedily can strand a later cell
        // type even when a valid assignment exists.
        for (const acceptedCellType of [perkTypes[perkName], "Prismatic"]) {
            for (const slotName of slotOrder) {
                const item = items[slotName];
                for (let index = 0; index < item.cellSlots.length && (perks[perkName] ?? 0) < desiredValue; index++) {
                    if (cellsSlotted[slotName][index] !== null || item.cellSlots[index] !== acceptedCellType) {
                        continue;
                    }
                    cellsSlotted[slotName][index] = perkName;
                    perks[perkName] = (perks[perkName] ?? 0) + 3;
                }
            }
        }
        if ((perks[perkName] ?? 0) < desiredValue) {
            return null;
        }
    }

    return { cellsSlotted, perks };
};

interface SemanticIndexes<T> {
    lantern: ItemSignature<T>;
    left: PairGroup<T>[];
    right: PairGroup<T>[];
    weapons: ItemGroup<T>[];
}

const buildSemanticIndexes = <T>(data: FinderCoreData<T>, dimensions: SearchDimensions): SemanticIndexes<T> => ({
    lantern: createItemSignature(data.lantern, dimensions),
    left: groupPairs(data.head, data.torso, dimensions),
    right: groupPairs(data.arms, data.legs, dimensions),
    weapons: groupItems(data.weapons, dimensions),
});

const semanticIndexCache = new WeakMap<object, Map<string, SemanticIndexes<unknown>>>();

const semanticIndexes = <T>(data: FinderCoreData<T>, dimensions: SearchDimensions): SemanticIndexes<T> => {
    let cache = semanticIndexCache.get(data);
    if (!cache) {
        cache = new Map();
        semanticIndexCache.set(data, cache);
    }
    const key =
        `${dimensions.cellTypes.join("\u0001")}\u0003` +
        dimensions.perkNames
            .map(
                (perkName, index) =>
                    `${perkName}\u0000${dimensions.perkCellIndexes[index]}\u0000${dimensions.targetUnits[index]}`,
            )
            .join("\u0001") +
        `\u0002${dimensions.bonusPerkNames.join("\u0001")}`;
    const cached = cache.get(key);
    if (cached) {
        return cached as SemanticIndexes<T>;
    }
    const indexes = buildSemanticIndexes(data, dimensions);
    // A finder session can generate many transient queries as perks are toggled.
    // Bound retained indexes while keeping recent repeated searches hot.
    if (cache.size >= 64) {
        cache.delete(cache.keys().next().value as string);
    }
    cache.set(key, indexes as SemanticIndexes<unknown>);
    return indexes;
};

const fillCombined = <T>(
    indexes: SemanticIndexes<T>,
    weapon: ItemGroup<T>,
    left: PairGroup<T>,
    right: PairGroup<T>,
    dimensions: SearchDimensions,
    contributions: number[],
    slots: number[],
): void => {
    for (let index = 0; index < contributions.length; index++) {
        contributions[index] = Math.min(
            dimensions.targetUnits[index],
            weapon.contributions[index] +
                left.contributions[index] +
                right.contributions[index] +
                indexes.lantern.contributions[index],
        );
    }
    for (let index = 0; index < slots.length; index++) {
        slots[index] = weapon.slots[index] + left.slots[index] + right.slots[index] + indexes.lantern.slots[index];
    }
};

const fillPrefix = <T>(
    indexes: SemanticIndexes<T>,
    weapon: ItemGroup<T>,
    left: PairGroup<T>,
    dimensions: SearchDimensions,
    contributions: number[],
    slots: number[],
): void => {
    for (let index = 0; index < contributions.length; index++) {
        contributions[index] = Math.min(
            dimensions.targetUnits[index],
            weapon.contributions[index] + left.contributions[index] + indexes.lantern.contributions[index],
        );
    }
    for (let index = 0; index < slots.length; index++) {
        slots[index] = weapon.slots[index] + left.slots[index] + indexes.lantern.slots[index];
    }
};

const maximumGroupPotential = <T>(groups: PairGroup<T>[]): number =>
    groups.reduce(
        (maximum, group) =>
            Math.max(
                maximum,
                [...group.contributions, ...group.slots].reduce((sum, value) => sum + value, 0),
            ),
        0,
    );

export const searchBuildsCore = <T>(
    data: FinderCoreData<T>,
    perkTypes: Record<string, string>,
    requestedPerks: Record<string, number>,
    maxBuilds: number,
): FinderCoreMatch<T>[] => {
    if (
        maxBuilds <= 0 ||
        data.weapons.length === 0 ||
        data.head.length === 0 ||
        data.torso.length === 0 ||
        data.arms.length === 0 ||
        data.legs.length === 0
    ) {
        return [];
    }
    const dimensions = createDimensions(perkTypes, requestedPerks);
    if (!dimensions) {
        return [];
    }
    const indexes = semanticIndexes(data, dimensions);
    const results: FinderCoreMatch<T>[] = [];
    const concreteBuilds = new Set<string>();
    const contributions = Array<number>(dimensions.perkNames.length).fill(0);
    const slots = Array<number>(dimensions.cellTypes.length + 1).fill(0);
    const demand = Array<number>(dimensions.cellTypes.length).fill(0);
    const prefixContributions = Array<number>(dimensions.perkNames.length).fill(0);
    const prefixSlots = Array<number>(dimensions.cellTypes.length + 1).fill(0);
    const rightPotential = maximumGroupPotential(indexes.right);

    for (const weaponGroup of indexes.weapons) {
        for (const leftGroup of indexes.left) {
            fillPrefix(indexes, weaponGroup, leftGroup, dimensions, prefixContributions, prefixSlots);
            demand.fill(0);
            for (let index = 0; index < dimensions.targetUnits.length; index++) {
                demand[dimensions.perkCellIndexes[index]] += Math.max(
                    0,
                    dimensions.targetUnits[index] - prefixContributions[index],
                );
            }
            let prefixShortage = 0;
            for (let index = 0; index < demand.length; index++) {
                prefixShortage += Math.max(0, demand[index] - prefixSlots[index]);
            }
            prefixShortage = Math.max(0, prefixShortage - prefixSlots[prefixSlots.length - 1]);
            if (prefixShortage > rightPotential) {
                continue;
            }
            for (const rightGroup of indexes.right) {
                fillCombined(indexes, weaponGroup, leftGroup, rightGroup, dimensions, contributions, slots);
                demand.fill(0);
                for (let index = 0; index < dimensions.targetUnits.length; index++) {
                    demand[dimensions.perkCellIndexes[index]] += Math.max(
                        0,
                        dimensions.targetUnits[index] - contributions[index],
                    );
                }
                if (!canFitDemand(demand, slots)) {
                    continue;
                }

                for (const weapon of weaponGroup.members) {
                    for (const [head, torso] of leftGroup.members) {
                        for (const [arms, legs] of rightGroup.members) {
                            const identity = [weapon.name, head.name, torso.name, arms.name, legs.name].join("\u0000");
                            if (concreteBuilds.has(identity)) {
                                continue;
                            }
                            const items = { arms, head, lantern: data.lantern, legs, torso, weapon };
                            const assignment = assignCells(items, perkTypes, requestedPerks);
                            if (!assignment) {
                                continue;
                            }
                            concreteBuilds.add(identity);
                            results.push({ items, ...assignment });
                            if (results.length >= maxBuilds) {
                                return results;
                            }
                        }
                    }
                }
            }
        }
    }
    return results;
};

export type AvailablePerkValue = 0 | 3 | 6;

export const findAvailablePerkValuesCore = <T>(
    data: FinderCoreData<T>,
    perkTypes: Record<string, string>,
    requestedPerks: Record<string, number>,
    perksToAdd: string[],
): Record<string, AvailablePerkValue> => {
    const candidates = [...new Set(perksToAdd)];
    const result = Object.fromEntries(candidates.map(perk => [perk, 0])) as Record<string, AvailablePerkValue>;
    const validCandidates = candidates.filter(perk => perkTypes[perk] !== undefined);
    if (validCandidates.length === 0) {
        return result;
    }
    const dimensions = createDimensions(perkTypes, requestedPerks, validCandidates);
    if (!dimensions) {
        return result;
    }
    const indexes = semanticIndexes(data, dimensions);
    const candidateCellIndexes = validCandidates.map(perk => dimensions.cellTypes.indexOf(perkTypes[perk]));
    const baseTargets = dimensions.perkNames.map(perk => perkUnits(requestedPerks[perk] ?? 0));
    let unresolved = validCandidates.length;
    const contributions = Array<number>(dimensions.perkNames.length).fill(0);
    const slots = Array<number>(dimensions.cellTypes.length + 1).fill(0);
    const baseDemand = Array<number>(dimensions.cellTypes.length).fill(0);
    const prefixContributions = Array<number>(dimensions.perkNames.length).fill(0);
    const prefixSlots = Array<number>(dimensions.cellTypes.length + 1).fill(0);
    const rightPotential = maximumGroupPotential(indexes.right);

    for (const weaponGroup of indexes.weapons) {
        for (const leftGroup of indexes.left) {
            fillPrefix(indexes, weaponGroup, leftGroup, dimensions, prefixContributions, prefixSlots);
            baseDemand.fill(0);
            for (let index = 0; index < baseTargets.length; index++) {
                baseDemand[dimensions.perkCellIndexes[index]] += Math.max(
                    0,
                    baseTargets[index] - prefixContributions[index],
                );
            }
            let prefixShortage = 0;
            for (let index = 0; index < baseDemand.length; index++) {
                prefixShortage += Math.max(0, baseDemand[index] - prefixSlots[index]);
            }
            prefixShortage = Math.max(0, prefixShortage - prefixSlots[prefixSlots.length - 1]);
            if (prefixShortage > rightPotential) {
                continue;
            }
            for (const rightGroup of indexes.right) {
                fillCombined(indexes, weaponGroup, leftGroup, rightGroup, dimensions, contributions, slots);
                baseDemand.fill(0);
                for (let index = 0; index < baseTargets.length; index++) {
                    baseDemand[dimensions.perkCellIndexes[index]] += Math.max(
                        0,
                        baseTargets[index] - contributions[index],
                    );
                }
                let baseShortage = 0;
                for (let index = 0; index < baseDemand.length; index++) {
                    baseShortage += Math.max(0, baseDemand[index] - slots[index]);
                }
                if (baseShortage > slots[slots.length - 1]) {
                    continue;
                }

                for (let candidate = 0; candidate < validCandidates.length; candidate++) {
                    const perkName = validCandidates[candidate];
                    if (result[perkName] === 6) {
                        continue;
                    }
                    const innate =
                        weaponGroup.bonusInnate[candidate] +
                        leftGroup.bonusInnate[candidate] +
                        rightGroup.bonusInnate[candidate] +
                        indexes.lantern.bonusInnate[candidate];
                    const baseTarget = perkUnits(requestedPerks[perkName] ?? 0);
                    const oldNeed = Math.max(0, baseTarget - innate);
                    const cellIndex = candidateCellIndexes[candidate];
                    const oldCellShortage = Math.max(0, baseDemand[cellIndex] - slots[cellIndex]);

                    for (const value of [6, 3] as const) {
                        if (result[perkName] >= value) {
                            break;
                        }
                        const target = Math.max(baseTarget, value / 3);
                        const newNeed = Math.max(0, target - innate);
                        const demandIncrease = newNeed - oldNeed;
                        const newCellShortage = Math.max(0, baseDemand[cellIndex] + demandIncrease - slots[cellIndex]);
                        const shortage = baseShortage - oldCellShortage + newCellShortage;
                        if (shortage <= slots[slots.length - 1]) {
                            result[perkName] = value;
                            break;
                        }
                    }
                    if (result[perkName] === 6) {
                        unresolved--;
                    }
                }
                if (unresolved === 0) {
                    return result;
                }
            }
        }
    }
    return result;
};

export const findAvailablePerksCore = <T>(
    data: FinderCoreData<T>,
    perkTypes: Record<string, string>,
    requestedPerks: Record<string, number>,
    perksToAdd: string[],
): Record<string, boolean> => {
    const values = findAvailablePerkValuesCore(data, perkTypes, requestedPerks, perksToAdd);
    return Object.fromEntries(perksToAdd.map(perk => [perk, values[perk] > Math.min(6, requestedPerks[perk] ?? 0)]));
};
