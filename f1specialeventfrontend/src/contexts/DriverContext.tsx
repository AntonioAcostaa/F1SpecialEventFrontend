import { useState, createContext, FC, ReactNode, useEffect } from "react";
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

    const addDriver = (driver: IDriver, image: File) => {
        DriversService.postDriver(driver, image);
        getAllDrivers;
    }

    const removeDriver = (id: number) => {
        DriversService.deleteDriver(id);
        getAllDrivers;
    }

    const updateDriver = (driver: IDriver) => {
        DriversService.putDriver(driver);
        getAllDrivers;
    }

    useEffect(() => {
        getAllDrivers();
    }, []);

    return (
        <DriverContext.Provider value={{ drivers, getAllDrivers, addDriver, removeDriver, updateDriver }}>
            {children}
        </DriverContext.Provider>
    );
}