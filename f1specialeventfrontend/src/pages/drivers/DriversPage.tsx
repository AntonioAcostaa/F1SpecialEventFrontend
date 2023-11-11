import { useEffect, useState } from "react";
import IDriver from "../../interfaces/IDriver";
import DriversService from "../../services/DriversService";
import DriverList from "./components/DriverList";
import AddDriverModal from "./components/AddDriverModal";
import DeleteDriverModal from "./components/DeleteDriverModal";

const DriversPage = () => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);
    const [addDriverModalIsOpen, setAddDriverModalIsOpen] = useState(false);
    const [deleteDriverModalIsOpen, setDeleteDriverModalIsOpen] = useState(false);
    

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
        <>
            <div className="container p-5">
                <button className="btn btn-danger mx-1" onClick={() => setAddDriverModalIsOpen(true)}>
                    Add driver
                </button>
                <button className="btn btn-danger" onClick={() => setDeleteDriverModalIsOpen(true)}>
                    Delete driver
                </button>
                <div className="col-12 mx-auto text-center rounded p-5 border-top border-5 border-danger border-end m-5">
                    <h1>F1 Drivers 2023</h1>
                </div>
                <div className="container">
                    {drivers && drivers.length !== 0 && <DriverList drivers={drivers} />}
                </div>
            </div>
            {addDriverModalIsOpen && <AddDriverModal isOpen={addDriverModalIsOpen} setIsOpen={setAddDriverModalIsOpen} getAllDrivers={() => getAllDrivers()}/>}
            {deleteDriverModalIsOpen && <DeleteDriverModal isOpen={deleteDriverModalIsOpen} setIsOpen={setDeleteDriverModalIsOpen} getAllDrivers={() => getAllDrivers()}/>}
        </>
    );
};

export default DriversPage;
