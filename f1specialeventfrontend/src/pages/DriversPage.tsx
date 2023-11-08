import { useState } from "react";
import IDriver from "../interfaces/IDriver";
import DriversService from "../services/DriversService";

const DriversPage = () => {

    const [drivers, setDrivers] = useState<IDriver[]>([]);

    const getAllDrivers = () => {
        DriversService.getAllDrivers()
            .then(response => {
                setDrivers(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
        <div>Drivers</div>
        <button onClick={getAllDrivers}>Get all drivers</button>

        <div>
            {drivers && drivers.map((driver) => {
                return (
                    <div key={driver.id}>
                        {driver.id} {driver.name} {driver.age} {driver.nationality}
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default DriversPage;