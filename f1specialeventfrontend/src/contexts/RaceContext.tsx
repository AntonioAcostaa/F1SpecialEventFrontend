import { useState, createContext, FC, ReactNode } from "react";
import IRaceContext from "../interfaces/IRaceContext";
import IRace from "../interfaces/IRace";
import RacesService from "../services/RacesService";


export const RaceContext = createContext<IRaceContext | null>(null);

interface Props {
    children: ReactNode;
}

export const RaceContextProvider: FC<Props> = ({ children }) => {
    const [races, setRaces] = useState<IRace[]>([]);
    
    const getAllRaces = async () => {
        const races = await RacesService.getAllRaces()
        setRaces(races);
    };

    const getRacesByGrandPrix = async (grandPrix: string) => {
        const races = await RacesService.getRaceByGrandPrix(grandPrix);
        setRaces(races);
    }

    const getRacesByWinner = async (winner: string) => {
        const races = await RacesService.getRaceByWinner(winner);
        setRaces(races);
    }

    const addRace = async (newRace: IRace, image: File) => {
        await RacesService.postRace(newRace, image)
        await getAllRaces();
    }

    const removeRace = async (id: number) => {
        await RacesService.deleteRace(id);
        await getAllRaces();
    }

    const updateRace = async (updatedRace: IRace, image: File) => {
        await RacesService.putRace(updatedRace, image)
        await getAllRaces();
    }

    return (
        <RaceContext.Provider value={{ races, getAllRaces, getRacesByGrandPrix, getRacesByWinner, addRace, removeRace, updateRace }}>
            {children}
        </RaceContext.Provider>
    );
}