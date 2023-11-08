import axios from "axios";
import ITeam from "../interfaces/ITeam";


const TeamsService = (  //Service har ansvaret for å kommunisere med APIet, og returnerer dataen som blir hentet fra APIet.
    () => {
        const teamsEndpoint = "http://localhost:5014/api/Teams"; //URLen til APIet

        const getAllTeams = async () => {
            try {
                const response = await axios.get(teamsEndpoint);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        }

        const getTeamById = async (id: string) => {
            try {
                const response = await axios.get(`${teamsEndpoint}/${id}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        }

        const getTeamByName = async (name: string) => {
            try {
                const response = await axios.get(`${teamsEndpoint}/name/${name}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        }

        const postTeam = async (newRace: ITeam) => {
            try {
                const response = await axios.post(teamsEndpoint, newRace);
                if (response.status === 201) {
                    return response.data;
                } else {
                    return "Failed to post new team"
                }
            } catch (err) {
                console.log(err);
            }
        }

        const putTeam = async (updatedRace: ITeam) => {
            try {
                const result = await axios.put(`${teamsEndpoint}/${updatedRace.id}`, updatedRace);
                if (result.status === 204) {
                    return true;
                } else {
                    return false;
                }
            } catch(err) {
                console.log(err);
            }
        }

        const deleteTeam = async (id: string) => {
            try {
                const result = await axios.delete(`${teamsEndpoint}/${id}`);
                if (result.status === 204) {
                    return true;
                } else {
                    return false;
                }
            } catch(err) {
                console.log(err);
            }
        }

        return {
            getAllTeams,
            getTeamById,
            getTeamByName,
            postTeam,
            putTeam,
            deleteTeam
        }
    }
)();

export default TeamsService;