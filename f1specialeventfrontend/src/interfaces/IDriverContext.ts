import IDriver from "./IDriver";

interface IDriverContext {
    drivers: IDriver[],
    setDrivers: (drivers: IDriver[]) => void;
    getAllDrivers: () => void;
    getDriverByName: (name: string) => void;
    addDriver: (newDriver: IDriver, image: File) => void;
    removeDriver: (id: number) => void;
    updateDriver: (updatedDriver: IDriver, image: File) => void;
}

export default IDriverContext;