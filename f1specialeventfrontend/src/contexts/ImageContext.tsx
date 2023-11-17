import { useState, createContext, FC, ReactNode} from "react";
import IImageContext from "../interfaces/IImageContext";
import ImageService from "../services/ImageService";


export const ImageContext = createContext<IImageContext | null>(null);

interface Props {
    children: ReactNode;
}

export const ImageContextProvider: FC<Props> = ({ children }) => {
    const [images, setImages] = useState<string[]>([]);
    
    const getAllImages = () => {
        ImageService.getAllImages()
        .then((response) => {
            setImages(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <ImageContext.Provider value={{ images, getAllImages }}>
            {children}
        </ImageContext.Provider>
    );
}