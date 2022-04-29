
class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter ((explorer) => explorer.mission === mission);
        return explorersByMission;
    };
    static getAmountOfExplorersByMission(explorers, mission){
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    };
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNodeToGetUsernames; 
        
    };

};