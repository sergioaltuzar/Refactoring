
class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter ((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const CountExplorersByMission = explorers.filter((explorer) => explorer.mission == mission).length;
        return CountExplorersByMission;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const ExplorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == mission).map((explorer) => explorer.githubUsername);
        return ExplorersUsernamesByMission;
    
        
    }

}

module.exports = ExplorerService;