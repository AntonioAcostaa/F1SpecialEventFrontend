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
    
    const getAllTeams = () => {
        TeamsService.getAllTeams()
        .then((response) => {
                setTeams(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const addTeam = (newTeam: ITeam, image: File) => {
        TeamsService.postTeam(newTeam, image)
        getAllTeams;
    }

    const removeTeam = (id: number) => {
        TeamsService.deleteTeam(id);
        getAllTeams;
    }

    const updateTeam = (updatedTeam: ITeam, image: File) => {
        TeamsService.putTeam(updatedTeam, image)
        getAllTeams;
    }

    return (
        <TeamContext.Provider value={{ teams, getAllTeams, addTeam, removeTeam, updateTeam }}>
            {children}
        </TeamContext.Provider>
    );
}