import { useState } from "react";
import TeamsService from "../../services/TeamsService";
import ITeam from "../../interfaces/ITeam";

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

    return (
        <div className="container">
            <div className="col-12 mx-auto text-center p-5 border-top border-4 border-danger border-end m-5">
                <h1>F1 Teams 2023</h1>
            </div>
            <button onClick={getAllTeams}>Get all teams</button>

            {teams.length !== 0 &&
                teams.map((team) => {
                    return (
                        <div key={team.id}>
                            {team.id} {team.manufacturer} {team.driver1}{" "}
                            {team.driver2}
                        </div>
                    );
                })}
        </div>
    );
};

export default TeamsPage;