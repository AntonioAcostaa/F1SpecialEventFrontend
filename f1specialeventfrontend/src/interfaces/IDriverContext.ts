import IDriver from "./IDriver";

interface IDriverContext {
    drivers: IDriver[],
    getAllDrivers: () => void;
    addDriver: (newDriver: IDriver, image: File) => void;
    removeDriver: (id: number) => void;
    updateDriver: (updatedDriver: IDriver) => void;
}

export default IDriverContext;