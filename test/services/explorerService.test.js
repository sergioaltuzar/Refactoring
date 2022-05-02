const ExplorerService = require ("./../../lib/services/ExplorerService");

describe ("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular Todos los Explorers en una misión", () => {
        const explorers = [{mission : "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Numero de explorer en Node", () => {
        const explorers = [
            {
                mission: "node"
            }
        ];
        const ExplorersWithNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(ExplorersWithNode).toBe(6);
    });

    test("Lista de explorers en Node", () => {
        const explorers = [
            {
                mission: "node",
                githubUsername: "ajolonauta6"
            }
        ];
        const ExplorersUsernamesWithNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(ExplorersUsernamesWithNode[0]).toBe("ajolonauta15");
    });
});