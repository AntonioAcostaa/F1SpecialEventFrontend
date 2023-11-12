import { useContext, useEffect, useState } from "react";
import DriverList from "./components/DriverList";
import AddDriverModal from "./components/AddDriverModal";
import DeleteDriverModal from "./components/DeleteDriverModal";
import { DriverContext } from "../../contexts/DriverContext";
import IDriverContext from "../../interfaces/IDriverContext";
import EditDriverModal from "./components/EditDriverModal";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext, { ActivePage } from "../../interfaces/IActivePageContext";

const DriversPage = () => {
    const [addDriverModalIsOpen, setAddDriverModalIsOpen] = useState(false);
    const [deleteDriverModalIsOpen, setDeleteDriverModalIsOpen] = useState(false);
    const [updateDriverModalIsOpen, setUpdateDriverModalIsOpen] = useState(false);

    const {drivers, getAllDrivers, addDriver, removeDriver, updateDriver} = useContext(DriverContext) as IDriverContext;
    const {setActivePage} = useContext(ActivePageContext) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.drivers);
        getAllDrivers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <>
            <div className="container p-5">
                <button className="btn btn-danger mx-1" onClick={() => setAddDriverModalIsOpen(!addDriverModalIsOpen)}>
                    Add driver
                </button>
                <button className="btn btn-danger" onClick={() => setDeleteDriverModalIsOpen(!deleteDriverModalIsOpen)}>
                    Delete driver
                </button>
                <button className="btn btn-danger mx-1" onClick={() => setUpdateDriverModalIsOpen(!updateDriverModalIsOpen)}>
                    Update driver
                </button>
                <div className="col-12 mx-auto text-center rounded p-5 border-top border-5 border-danger border-end m-5">
                    <h1>F1 Drivers 2023</h1>
                </div>
                <div className="container">
                    {drivers && drivers.length !== 0 && <DriverList drivers={drivers} />}
                </div>
            </div>
            {addDriverModalIsOpen && <AddDriverModal isOpen={addDriverModalIsOpen} setIsOpen={setAddDriverModalIsOpen} getAllDrivers={() => getAllDrivers()} addDriver={addDriver}/>}
            {deleteDriverModalIsOpen && <DeleteDriverModal isOpen={deleteDriverModalIsOpen} setIsOpen={setDeleteDriverModalIsOpen} getAllDrivers={() => getAllDrivers()} removeDriver={removeDriver}/>}
            {updateDriverModalIsOpen && <EditDriverModal isOpen={updateDriverModalIsOpen} setIsOpen={setUpdateDriverModalIsOpen} getAllDrivers={() => getAllDrivers()} updateDriver={updateDriver}/>}
        </>
    );
};

export default DriversPage;
