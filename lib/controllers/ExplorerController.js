const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Readers");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const ExplorersWithMission = ExplorerService.filterByMission(explorers, mission);
        return ExplorersWithMission;
    }
}

module.exports = ExplorerController;