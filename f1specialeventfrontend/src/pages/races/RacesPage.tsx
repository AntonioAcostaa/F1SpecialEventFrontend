import { useContext, useEffect, useState } from "react";
//import format from "date-fns/format";
import RaceList from "./components/RaceList";
import { RaceContext } from "../../contexts/RaceContext";
import IRaceContext from "../../interfaces/IRaceContext";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext, {
    ActivePage,
} from "../../interfaces/IActivePageContext";
import AddRaceModal from "./components/AddRaceModal";
import DeleteRaceModal from "./components/DeleteRaceModal";
import EditRaceModal from "./components/EditRaceModal";
import "../../assets/fonts/fonts.css";

const RacesPage = () => {
    const [addRaceModalIsOpen, setAddRaceModalIsOpen] = useState(false);
    const [deleteRaceModalIsOpen, setDeleteRaceModalIsOpen] = useState(false);
    const [updateRaceModalIsOpen, setUpdateRaceModalIsOpen] = useState(false);

    const { races, getAllRaces, addRace, removeRace, updateRace } = useContext(
        RaceContext
    ) as IRaceContext;
    const { setActivePage } = useContext(
        ActivePageContext
    ) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.races);
        getAllRaces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="container p-3">
                <button
                    className="btn btn-danger mx-1"
                    onClick={() => setAddRaceModalIsOpen(!addRaceModalIsOpen)}
                >
                    Add race
                </button>
                <button
                    className="btn btn-danger mx-1"
                    onClick={() =>
                        setDeleteRaceModalIsOpen(!deleteRaceModalIsOpen)
                    }
                >
                    Delete race
                </button>
                <button
                    className="btn btn-danger mx-1"
                    onClick={() =>
                        setUpdateRaceModalIsOpen(!updateRaceModalIsOpen)
                    }
                >
                    Update race
                </button>
                <div className="col-12 mx-auto rounded text-center p-4 border-top border-5 border-danger border-end mb-1 mt-3">
                    <h1>F1 Race Results 2023</h1>
                </div>
            </div>
            <div className="col-12 text-start">
                {races.length !== 0 && <RaceList races={races} />}
            </div>
            {addRaceModalIsOpen && (
                <AddRaceModal
                    isOpen={addRaceModalIsOpen}
                    setIsOpen={setAddRaceModalIsOpen}
                    addRace={addRace}
                />
            )}
            {deleteRaceModalIsOpen && (
                <DeleteRaceModal
                    isOpen={deleteRaceModalIsOpen}
                    setIsOpen={setDeleteRaceModalIsOpen}
                    races={races}
                    removeRace={removeRace}
                />
            )}
            {updateRaceModalIsOpen && (
                <EditRaceModal
                    isOpen={updateRaceModalIsOpen}
                    setIsOpen={setUpdateRaceModalIsOpen}
                    races={races}
                    updateRace={updateRace}
                />
            )}
        </div>
    );
};

export default RacesPage;
