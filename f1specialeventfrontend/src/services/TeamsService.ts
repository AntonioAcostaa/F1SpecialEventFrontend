import axios from "axios";
import ITeam from "../interfaces/ITeam";


const TeamsService = (  //Service har ansvaret for å kommunisere med APIet, og returnerer dataen som blir hentet fra APIet.
    () => {
        const teamsEndpoint = "http://localhost:5014/api/Teams"; //URLen til APIet - Finne ut av hvordan vi kan rette det med at man får forksjellige porter på forskjellige maskiner. 
        const imageEndpoint = "http://localhost:5014/api/imageUpload";


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

        const getTeamsByName = async (name: string) => {
            try {
                const response = await axios.get(`${teamsEndpoint}/GetTeamsByName/${name}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        }

        const postTeam = async (newTeam: ITeam, image: File) => {
            try {
                const response = await axios.post(teamsEndpoint, newTeam);
                const formData = new FormData();
                formData.append("formFile", image);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const uploadResult = await axios({
                    url: imageEndpoint,
                    method: "POST",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                formData.delete("formFile");

                if (response.status === 201 && uploadResult.status === 200) {
                    return response.data;
                } else {
                    return "Failed to post team";
                }
            } catch (err) {
                console.log(err);
            }
        };

        const putTeam = async (updatedTeam: ITeam, image: File) => {
            try {
                const response = await axios.put(`${teamsEndpoint}/${updatedTeam.id}`, updatedTeam);
                const formData = new FormData();
                formData.append("formFile", image);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const uploadResult = await axios({
                    url: imageEndpoint,
                    method: "POST",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                formData.delete("formFile");

                if (response.status === 201 && uploadResult.status === 200) {
                    return response.data;
                } else {
                    return "Failed to update team";
                }
            } catch (err) {
                console.log(err);
            }
        }

        const deleteTeam = async (id: number) => {
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
            getTeamsByName,
            postTeam,
            putTeam,
            deleteTeam
        }
    }
)();

export default TeamsService;