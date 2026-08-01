import {
    findAvailablePerksCore,
    findAvailablePerkValuesCore,
    FinderCoreData,
    FinderCoreItem,
    searchBuildsCore,
} from "./find-builds-core";

const perkTypes = { A: "Power", B: "Power", C: "Speed" };

const item = (name: string, perks: string[] = [], cellSlots: string[] = []): FinderCoreItem => ({
    cellSlots,
    name,
    perks,
    source: name,
});

const identity = (items: {
    weapon: FinderCoreItem;
    head: FinderCoreItem;
    torso: FinderCoreItem;
    arms: FinderCoreItem;
    legs: FinderCoreItem;
}) => [items.weapon.name, items.head.name, items.torso.name, items.arms.name, items.legs.name].join("|");

const exhaustiveOracle = (data: FinderCoreData, requestedPerks: Record<string, number>): Set<string> => {
    const result = new Set<string>();
    for (const weapon of data.weapons) {
        for (const head of data.head) {
            for (const torso of data.torso) {
                for (const arms of data.arms) {
                    for (const legs of data.legs) {
                        const items = { arms, head, lantern: data.lantern, legs, torso, weapon };
                        const innate: Record<string, number> = {};
                        const slots: Record<string, number> = { Power: 0, Speed: 0 };
                        let prismatic = 0;
                        for (const selectedItem of Object.values(items)) {
                            for (const perk of new Set(selectedItem.perks)) {
                                innate[perk] = (innate[perk] ?? 0) + 3;
                            }
                            for (const slot of selectedItem.cellSlots) {
                                if (slot === "Prismatic") {
                                    prismatic++;
                                } else {
                                    slots[slot] = (slots[slot] ?? 0) + 1;
                                }
                            }
                        }
                        const demand: Record<string, number> = { Power: 0, Speed: 0 };
                        for (const [perk, value] of Object.entries(requestedPerks)) {
                            demand[perkTypes[perk as keyof typeof perkTypes]] += Math.ceil(
                                Math.max(0, value - (innate[perk] ?? 0)) / 3,
                            );
                        }
                        const shortage = Object.keys(demand).reduce(
                            (sum, cellType) => sum + Math.max(0, demand[cellType] - (slots[cellType] ?? 0)),
                            0,
                        );
                        if (shortage <= prismatic) {
                            result.add(identity(items));
                        }
                    }
                }
            }
        }
    }
    return result;
};

const randomData = (seed: number): FinderCoreData => {
    let state = seed;
    const random = () => {
        state = (state * 1664525 + 1013904223) >>> 0;
        return state / 0x100000000;
    };
    const category = (name: string, count: number) =>
        Array.from({ length: count }, (_, index) => {
            const selectedPerks = ["A", "B", "C"].filter(() => random() < 0.28).slice(0, 1);
            const slot = ["Power", "Speed", "Prismatic"][Math.floor(random() * 3)];
            return item(`${name}-${seed}-${index}`, selectedPerks, [slot]);
        });
    return {
        arms: category("arms", 3),
        head: category("head", 3),
        lantern: item(`lantern-${seed}`, [], ["Speed"]),
        legs: category("legs", 3),
        torso: category("torso", 3),
        weapons: category("weapon", 2).map((weapon, index) => ({
            ...weapon,
            cellSlots: [weapon.cellSlots[0], index === 0 ? "Prismatic" : "Power"],
        })),
    };
};

describe("searchBuildsCore", () => {
    it("does not discard a non-representative armour piece with a required innate perk", () => {
        const data: FinderCoreData = {
            arms: [item("arms")],
            head: [item("wrong representative", [], ["Power"]), item("required head", ["A"], ["Power"])],
            lantern: item("lantern"),
            legs: [item("legs")],
            torso: [item("torso")],
            weapons: [item("weapon")],
        };
        const builds = searchBuildsCore(data, perkTypes, { A: 6 }, 100);
        expect(builds.map(build => build.items.head.name)).toEqual(["required head"]);
    });

    it("expands every concrete member before deduplicating", () => {
        const data: FinderCoreData = {
            arms: [item("arms")],
            head: [item("head one", ["A"], ["Power"]), item("head two", ["A"], ["Power"])],
            lantern: item("lantern"),
            legs: [item("legs")],
            torso: [item("torso")],
            weapons: [item("weapon")],
        };
        const builds = searchBuildsCore(data, perkTypes, { A: 3 }, 100);
        expect(new Set(builds.map(build => build.items.head.name))).toEqual(new Set(["head one", "head two"]));
    });

    it("does not greedily waste a prismatic slot needed by another cell type", () => {
        const data: FinderCoreData = {
            arms: [item("arms")],
            head: [item("head", [], ["Power"])],
            lantern: item("lantern", [], ["Prismatic"]),
            legs: [item("legs")],
            torso: [item("torso")],
            weapons: [item("weapon")],
        };
        const builds = searchBuildsCore(data, perkTypes, { A: 3, C: 3 }, 1);
        expect(builds).toHaveLength(1);
        expect(builds[0].cellsSlotted.head).toEqual(["A"]);
        expect(builds[0].cellsSlotted.lantern).toEqual(["C"]);
    });

    it("matches an independent exhaustive oracle across deterministic random worlds", () => {
        const requests: Array<Record<string, number>> = [
            {},
            { A: 3 },
            { A: 6, B: 3 },
            { A: 6, B: 6, C: 3 },
            { A: 6, B: 6, C: 6 },
        ];
        for (let seed = 1; seed <= 20; seed++) {
            const data = randomData(seed);
            for (const request of requests) {
                const expected = exhaustiveOracle(data, request);
                const actual = new Set(
                    searchBuildsCore(data, perkTypes, request, Number.MAX_SAFE_INTEGER).map(build =>
                        identity(build.items),
                    ),
                );
                expect(actual).toEqual(expected);
            }
        }
    });

    it("returns valid cell assignments and honors the result cap", () => {
        const data = randomData(42);
        const requested = { A: 6, B: 3, C: 3 };
        const builds = searchBuildsCore(data, perkTypes, requested, 5);
        expect(builds.length).toBeLessThanOrEqual(5);
        for (const build of builds) {
            for (const [perk, value] of Object.entries(requested)) {
                expect(build.perks[perk]).toBeGreaterThanOrEqual(value);
            }
            expect(new Set(builds.map(result => identity(result.items))).size).toBe(builds.length);
        }
        expect(searchBuildsCore(data, perkTypes, requested, 0)).toEqual([]);
    });

    it("computes all addable +3 perks exactly in one traversal", () => {
        for (let seed = 30; seed < 40; seed++) {
            const data = randomData(seed);
            const requested = { A: 3 };
            const candidates = ["A", "B", "C"];
            const batch = findAvailablePerksCore(data, perkTypes, requested, candidates);
            for (const candidate of candidates) {
                const target = { ...requested, [candidate]: (requested[candidate as keyof typeof requested] ?? 0) + 3 };
                expect(batch[candidate]).toBe(exhaustiveOracle(data, target).size > 0);
            }
        }
    });

    it("returns the highest exact +3 or +6 rank for every bonus perk", () => {
        for (let seed = 50; seed < 60; seed++) {
            const data = randomData(seed);
            const requested: Record<string, number> = { A: 3 };
            const candidates = ["A", "B", "C", "unknown"];
            const values = findAvailablePerkValuesCore(data, perkTypes, requested, candidates);
            for (const candidate of ["A", "B", "C"]) {
                const plusSix = { ...requested, [candidate]: 6 };
                const plusThree = { ...requested, [candidate]: Math.max(3, requested[candidate] ?? 0) };
                const expected =
                    exhaustiveOracle(data, plusSix).size > 0 ? 6 : exhaustiveOracle(data, plusThree).size > 0 ? 3 : 0;
                expect(values[candidate]).toBe(expected);
            }
            expect(values.unknown).toBe(0);
        }
    });
});
