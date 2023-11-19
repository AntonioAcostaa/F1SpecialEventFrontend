import ITeam from "./ITeam";

interface ITeamContext {
    teams: ITeam[],
    getAllTeams: () => void;
    getTeamsByName: (name: string) => void;
    addTeam: (newTeam: ITeam, image: File) => void;
    removeTeam: (id: number) => void;
    updateTeam: (updatedTeam: ITeam, image: File) => void;
}

export default ITeamContext;