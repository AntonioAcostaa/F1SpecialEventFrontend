import { useState, createContext, FC, ReactNode } from "react";
import IDriverContext from "../interfaces/IDriverContext";
import DriversService from "../services/DriversService";
import IDriver from "../interfaces/IDriver";

export const DriverContext = createContext<IDriverContext | null>(null);

interface Props {
    children: ReactNode;
}

export const DriverContextProvider: FC<Props> = ({ children }) => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);
    
    const getAllDrivers = () => {
        DriversService.getAllDrivers()
        .then((response) => {
            setDrivers(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const addDriver = (newDriver: IDriver, image: File) => {
        DriversService.postDriver(newDriver, image)
        getAllDrivers();
    }

    const removeDriver = (id: number) => {
        DriversService.deleteDriver(id);
        getAllDrivers;
    }

    const updateDriver = (updatedDriver: IDriver, image: File) => {
        DriversService.putDriver(updatedDriver, image)
        getAllDrivers;
    }

    return (
        <DriverContext.Provider value={{ drivers, getAllDrivers, addDriver, removeDriver, updateDriver }}>
            {children}
        </DriverContext.Provider>
    );
}