import IDriver from "../../../interfaces/IDriver";
import DriverCard from "./DriverCard";

const DriverList = ({drivers} : {drivers: IDriver[]}) => {
    return (
        <section className="row">
            { drivers && drivers.map((driver) => {
                return(
                    <DriverCard key={driver.id} driver={driver} />
                )
            })}
        </section>
    )
};

export default DriverList;