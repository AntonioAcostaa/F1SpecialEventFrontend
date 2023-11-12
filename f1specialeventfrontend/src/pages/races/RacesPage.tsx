import { useEffect, useState } from "react";
import RacesService from "../../services/RacesService";
import IRace from "../../interfaces/IRace";
//import format from "date-fns/format";
import RaceList from "./components/RaceList";

const RacesPage = () => {
    const [races, setRaces] = useState<IRace[]>([]);

    const getAllRaces = () => {
        RacesService.getAllRaces()
            .then((response) => {
                setRaces(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllRaces();
    }, []);
    return (
        <div className="container">
            <div className="col-12 mx-auto rounded text-center p-5 border-top border-4 border-danger border-end m-5">
                <h1>F1 Race Results 2023</h1>
            </div>

            <div className="col-12 text-start">
                {races.length !== 0 && <RaceList races={races} />}
            </div>
        </div>
    );
};

export default RacesPage;
