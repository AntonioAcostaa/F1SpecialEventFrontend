import axios from "axios";
import IDriver from "../interfaces/IDriver";

const DriversService = (() => {
    const driversEndpoint = "http://localhost:5014/api/Drivers";
    const imageEndpoint = "http://localhost:5014/api/imageUpload";

    const getAllDrivers = async () => {
        try {
            const response = await axios.get(driversEndpoint);
            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getDriverById = async (id: string) => {
        try {
            const response = await axios.get(`${driversEndpoint}/${id}`);
            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const getDriverByName = async (name: string) => {
        try {
            const response = await axios.get(
                `${driversEndpoint}/GetDriverByName/${name}`
            );
            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const postDriver = async (newDriver: IDriver, image: File) => {
        try {
            const response = await axios.post(driversEndpoint, newDriver);

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

            if (response.status === 200 && uploadResult.status === 200) {
                return response.data;
            } else {
                return "Failed to post driver";
            }
        } catch (err) {
            console.log(err);
        }
    };

    const putDriver = async (updatedDriver: IDriver, image: File) => {
        try {
            const response = await axios.put(
                `${driversEndpoint}/${updatedDriver.id}`,
                updatedDriver
            );

            if (image) {
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
            }
            if (response.status === 201) {
                return response.data;
            } else {
                return "Failed to update driver";
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteDriver = async (id: number) => {
        try {
            const result = await axios.delete(`${driversEndpoint}/${id}`);
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
        getAllDrivers,
        getDriverById,
        getDriverByName,
        postDriver,
        putDriver,
        deleteDriver,
    };
})();

export default DriversService;
