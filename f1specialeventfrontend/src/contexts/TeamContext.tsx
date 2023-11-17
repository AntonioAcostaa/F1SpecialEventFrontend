import { useState, createContext, FC, ReactNode } from "react";
import ITeamContext from "../interfaces/ITeamContext";
import ITeam from "../interfaces/ITeam";
import TeamsService from "../services/TeamsService";

export const TeamContext = createContext<ITeamContext | null>(null);

interface Props {
    children: ReactNode;
}

export const TeamContextProvider: FC<Props> = ({ children }) => {
    const [teams, setTeams] = useState<ITeam[]>([]);
    
    const getAllTeams = async () => {
        const teams = await TeamsService.getAllTeams()
        setTeams(teams);
    };

    const addTeam = async (newTeam: ITeam, image: File) => {
        await TeamsService.postTeam(newTeam, image)
        await getAllTeams();
    }

    const removeTeam = async (id: number) => {
        await TeamsService.deleteTeam(id);
        await getAllTeams();
    }

    const updateTeam = async (updatedTeam: ITeam, image: File) => {
        await TeamsService.putTeam(updatedTeam, image)
        await getAllTeams();
    }

    return (
        <TeamContext.Provider value={{ teams, getAllTeams, addTeam, removeTeam, updateTeam }}>
            {children}
        </TeamContext.Provider>
    );
}