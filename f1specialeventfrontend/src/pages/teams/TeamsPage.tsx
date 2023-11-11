import { useEffect, useState } from "react";
import TeamsService from "../../services/TeamsService";
import ITeam from "../../interfaces/ITeam";
import TeamList from "./components/Teamslist";

const TeamsPage = () => {
    const [teams, setTeams] = useState<ITeam[]>([]);

    const getAllTeams = () => {
        TeamsService.getAllTeams()
            .then((response) => {
                setTeams(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllTeams();
    }, []);

    return (
        <div className="container p-5">
            <div className="col-12 mx-auto text-center rounded p-5 border-top border-4 border-danger border-end m-5">
                <h1>F1 Teams 2023</h1>
            </div>
            <div className="container">
                {teams && teams.length !== 0 && <TeamList teams={teams} />}
            </div>
        </div>
    );
};

export default TeamsPage;
