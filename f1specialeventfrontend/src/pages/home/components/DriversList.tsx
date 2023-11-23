import '/src/assets/fonts/fonts.css';
import { useContext, useEffect } from 'react';
import { DriverContext } from '../../../contexts/DriverContext';
import IDriverContext from '../../../interfaces/IDriverContext';

const DriversList = () => {
    useEffect(() => {
        getAllDrivers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { drivers, getAllDrivers } = useContext(DriverContext) as IDriverContext;

    const driversSortedByPoints = drivers.sort((a, b) => b.points - a.points);

    return (
        <section className='header col text-center'>
            <h3 className='text-decoration-underline'>Drivers</h3>
            <div style={{maxHeight: "460px", overflow: "scroll"}} className='rounded border-top border-5 border-danger border-end mb-1 mt-3'>
                <table className='table'>
                    <thead>
                        <tr className='table-secondary'>
                            <th scope='col'>ID</th>
                            <th scope='col'>Driver</th>
                            <th scope='col'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {driversSortedByPoints.map((driver) => (
                                <tr key={driver.id}>
                                    <th scope="row">{driver.id}</th>
                                    <td>{driver.name}</td>
                                    <td>{driver.points}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DriversList;