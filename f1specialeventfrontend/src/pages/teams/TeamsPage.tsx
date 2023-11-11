import { useContext, useState } from "react";
import TeamList from "./components/Teamslist";
import { TeamContext } from "../../contexts/TeamContext";
import ITeamContext from "../../interfaces/ITeamContext";
import AddTeamModal from "./components/AddTeamModal";

const TeamsPage = () => {
const [addTeamModalIsOpen, setAddTeamModalIsOpen] = useState(false);
const [deleteTeamModalIsOpen, setDeleteTeamModalIsOpen] = useState(false);
const [updateTeamModalIsOpen, setUpdateTeamModalIsOpen] = useState(false);

const {teams, getAllTeams, addTeam, removeTeam, updateTeam} = useContext(TeamContext) as ITeamContext;

    return (
        <div className="container p-5">
            <button className="btn btn-danger mx-1" onClick={() => setAddTeamModalIsOpen(!addTeamModalIsOpen)}>
                    Add team
            </button>
            <div className="col-12 mx-auto text-center rounded p-5 border-top border-4 border-danger border-end m-5">
                <h1>F1 Teams 2023</h1>
            </div>
            <div className="container">
                {teams && teams.length !== 0 && <TeamList teams={teams} />}
            </div>
            {addTeamModalIsOpen && <AddTeamModal isOpen={addTeamModalIsOpen} setIsOpen={setAddTeamModalIsOpen} getAllTeams={getAllTeams} addTeam={addTeam} />}
        </div>
    );
};

export default TeamsPage;
