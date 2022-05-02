const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Readers");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const ExplorersWithMission = ExplorerService.filterByMission(explorers, mission);
        return ExplorersWithMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const UsernamesWithMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return UsernamesWithMission;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const AmountExplorersWithMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return AmountExplorersWithMission;
    }

}

module.exports = ExplorerController;