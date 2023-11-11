import axios from 'axios';
import IDriver from '../interfaces/IDriver';
import ITeam from '../interfaces/ITeam';

const MediaService = (() => {
    const driverController = 'http://localhost:5014/api/Drivers';
    const teamController = 'http://localhost:5014/api/Teams';
    const imageUploadController = 'http://localhost:5014/api/ImageUpload';

    const postDriver = async (newDriver: IDriver, image: File | null) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(driverController, newDriver);

        if (image !== null) {
            const formData = new FormData();
            formData.append('formFile', image);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const uploadResult = await axios({
                url: imageUploadController,
                method: 'POST',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).catch((error) => {
                alert(`Image upload failed ${error.response.data}`);
            })
            formData.delete('formFile');

        }
    };

    const postTeam = async (newTeam: ITeam, image: File | null) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(teamController, newTeam);

        if (image !== null) {
            const formData = new FormData();
            formData.append('formFile', image);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const uploadResult = await axios({
                url: imageUploadController,
                method: 'POST',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).catch((error) => {
                alert(`Image upload failed ${error.response.data}`);
            });
            formData.delete('formFile');
        }
    };

    return {
        postDriver,
        postTeam,
    };
})();

export default MediaService;
