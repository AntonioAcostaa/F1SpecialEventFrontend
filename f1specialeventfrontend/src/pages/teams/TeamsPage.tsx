import { useContext, useEffect, useState } from "react";
import TeamList from "./components/Teamslist";
import { TeamContext } from "../../contexts/TeamContext";
import ITeamContext from "../../interfaces/ITeamContext";
import AddTeamModal from "./components/AddTeamModal";
import DeleteTeamModal from "./components/DeleteTeamModal";
import EditTeamModal from "./components/EditTeamModal";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext, { ActivePage } from "../../interfaces/IActivePageContext";

const TeamsPage = () => {
const [addTeamModalIsOpen, setAddTeamModalIsOpen] = useState(false);
const [deleteTeamModalIsOpen, setDeleteTeamModalIsOpen] = useState(false);
const [updateTeamModalIsOpen, setUpdateTeamModalIsOpen] = useState(false);

const {teams, getAllTeams, addTeam, removeTeam, updateTeam} = useContext(TeamContext) as ITeamContext;
const {setActivePage} = useContext(ActivePageContext) as IActivePageContext;

useEffect(() => {
    setActivePage(ActivePage.teams);
    getAllTeams();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return (
        <div className="container p-5">
                <button className="btn btn-danger mx-1" onClick={() => setAddTeamModalIsOpen(!addTeamModalIsOpen)}>
                    Add team
                </button>
                <button className="btn btn-danger" onClick={() => setDeleteTeamModalIsOpen(!deleteTeamModalIsOpen)}>
                    Delete team
                </button>
                <button className="btn btn-danger mx-1" onClick={() => setUpdateTeamModalIsOpen(!updateTeamModalIsOpen)}>
                    Update team
                </button>
            <div className="col-12 mx-auto text-center rounded p-5 border-top border-4 border-danger border-end m-5">
                <h1>F1 Teams 2023</h1>
            </div>
            <div className="container">
                {teams && teams.length !== 0 && <TeamList teams={teams} />}
            </div>
            {addTeamModalIsOpen && <AddTeamModal isOpen={addTeamModalIsOpen} setIsOpen={setAddTeamModalIsOpen} addTeam={addTeam} />}
            {deleteTeamModalIsOpen && <DeleteTeamModal isOpen={deleteTeamModalIsOpen} setIsOpen={setDeleteTeamModalIsOpen} removeTeam={removeTeam} />}
            {updateTeamModalIsOpen && <EditTeamModal isOpen={updateTeamModalIsOpen} setIsOpen={setUpdateTeamModalIsOpen} updateTeam={updateTeam} />}
        </div>
    );
};

export default TeamsPage;
