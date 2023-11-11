import { useContext, useState } from "react";
import DriverList from "./components/DriverList";
import AddDriverModal from "./components/AddDriverModal";
import DeleteDriverModal from "./components/DeleteDriverModal";
import { DriverContext } from "../../contexts/DriverContext";
import IDriverContext from "../../interfaces/IDriverContext";

const DriversPage = () => {
    const [addDriverModalIsOpen, setAddDriverModalIsOpen] = useState(false);
    const [deleteDriverModalIsOpen, setDeleteDriverModalIsOpen] = useState(false);
    

    const {drivers, getAllDrivers, addDriver} = useContext(DriverContext) as IDriverContext;


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
            {addDriverModalIsOpen && <AddDriverModal isOpen={addDriverModalIsOpen} setIsOpen={setAddDriverModalIsOpen} getAllDrivers={() => getAllDrivers()} addDriver={addDriver}/>}
            {deleteDriverModalIsOpen && <DeleteDriverModal isOpen={deleteDriverModalIsOpen} setIsOpen={setDeleteDriverModalIsOpen} getAllDrivers={() => getAllDrivers()}/>}
        </>
    );
};

export default DriversPage;
