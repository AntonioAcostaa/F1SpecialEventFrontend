import { useEffect, useState } from 'react';
import IDriver from '../../interfaces/IDriver';
import DriversService from '../../services/DriversService';
import DriverList from './components/DriverList';

const DriversPage = () => {
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

    useEffect(() => {
        getAllDrivers();
    }, []);

    return (
        <div className='container p-5'>
            <div className='container'>
                {drivers.length !== 0 && <DriverList drivers={drivers} />}
            </div>
        </div>
    );
};

export default DriversPage;
