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
    
    const getAllRaces = () => {
        RacesService.getAllRaces()
        .then((response) => {
            setRaces(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const addRace = (newRace: IRace, image: File) => {
        RacesService.postRace(newRace, image)
        getAllRaces;
    }

    const removeRace = (id: number) => {
        RacesService.deleteRace(id);
        getAllRaces;
    }

    const updateRace = (updatedRace: IRace, image: File) => {
        RacesService.putRace(updatedRace, image).then((response) => {
            if(response === 200) {
                getAllRaces;
            }
        });
    }

    return (
        <RaceContext.Provider value={{ races, getAllRaces, addRace, removeRace, updateRace }}>
            {children}
        </RaceContext.Provider>
    );
}