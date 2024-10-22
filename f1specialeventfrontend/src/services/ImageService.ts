import axios from "axios";

const ImageService = (() => {
    const imageEndpoint = "http://localhost:5014/api/imageUpload";

    const imageURL = "http://localhost:5014/images/";

    const getAllImages = async () => {
        try {
            const response = await axios.get(imageEndpoint);
            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return {
        getAllImages,
        imageURL,
    };
})();

export default ImageService;
