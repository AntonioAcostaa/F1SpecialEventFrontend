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

    const getAllDrivers = async () => {
        const drivers = await DriversService.getAllDrivers()
        setDrivers(drivers);
    };

    const getDriverByName = async (name: string) => {
        const driver = await DriversService.getDriverByName(name);
        setDrivers([driver])
    }

    const addDriver = async (newDriver: IDriver, image: File) => {
        await DriversService.postDriver(newDriver, image)
        await getAllDrivers();
    }

    const removeDriver = async (id: number) => {
        await DriversService.deleteDriver(id);
        await getAllDrivers();
    }

    const updateDriver = async (updatedDriver: IDriver, image: File) => {
        await DriversService.putDriver(updatedDriver, image)
        await getAllDrivers();
    }

    return (
        <DriverContext.Provider value={{ drivers, getAllDrivers, getDriverByName, addDriver, removeDriver, updateDriver }}>
            {children}
        </DriverContext.Provider>
    );
}