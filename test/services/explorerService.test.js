const ExplorerService = require ("./../../lib/services/ExplorerService");

describe ("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular Todos los Explorers en una misión", () => {
        const explorers = [{mission : "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(4);
    });
});