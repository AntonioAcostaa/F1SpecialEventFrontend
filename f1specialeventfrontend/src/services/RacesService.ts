import axios from 'axios';
import IRace from '../interfaces/IRace';

const RacesService =
    //Service har ansvaret for å kommunisere med APIet, og returnerer dataen som blir hentet fra APIet.
    (() => {
        const racesEndpoint = 'http://localhost:5014/api/Races'; //URLen til APIet - Finne ut av hvordan vi kan rette det med at man får forksjellige porter på forskjellige maskiner.
        const imageEndpoint = 'http://localhost:5014/api/imageUpload';

        const getAllRaces = async () => {
            try {
                const response = await axios.get(racesEndpoint);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        };

        const getRaceById = async (id: string) => {
            try {
                const response = await axios.get(`${racesEndpoint}/${id}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        };

        const getRaceByGrandPrix = async (grandPrix: string) => {
            try {
                const response = await axios.get(`${racesEndpoint}/GetRaceByGrandPrix/${grandPrix}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        };

        const getRaceByWinner = async (winnerName: string) => {
            try {
                const response = await axios.get(`${racesEndpoint}/GetRaceByWinner/${winnerName}`);
                if (response.status === 200) {
                    return response.data;
                } else {
                    return [];
                }
            } catch (err) {
                console.log(err);
            }
        };

        const postRace = async (newRace: IRace, image: File) => {
            try {
                const response = await axios.post(racesEndpoint, newRace);
                const formData = new FormData();
                formData.append('formFile', image);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const uploadResult = await axios({
                    url: imageEndpoint,
                    method: 'POST',
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                formData.delete('formFile');

                if (response.status === 201 && uploadResult.status === 200) {
                    return response.data;
                } else {
                    return 'Failed to post race';
                }
            } catch (err) {
                console.log(err);
            }
        };

        const putRace = async (updatedRace: IRace, image: File) => {
            try {
                const response = await axios.put(`${racesEndpoint}/${updatedRace.id}`, updatedRace);

                if (image) {
                    const formData = new FormData();
                    formData.append('formFile', image);

                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const uploadResult = await axios({
                        url: imageEndpoint,
                        method: 'POST',
                        data: formData,
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                    formData.delete('formFile');
                }

                if (response.status === 201) {
                    return response.data;
                } else {
                    return 'Failed to edit race';
                }
            } catch (err) {
                console.log(err);
            }
        };

        const deleteRace = async (id: number) => {
            try {
                const result = await axios.delete(`${racesEndpoint}/${id}`);
                if (result.status === 204) {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                console.log(err);
            }
        };

        return {
            getAllRaces,
            getRaceById,
            getRaceByGrandPrix,
            getRaceByWinner,
            postRace,
            putRace,
            deleteRace,
        };
    })();

export default RacesService;
