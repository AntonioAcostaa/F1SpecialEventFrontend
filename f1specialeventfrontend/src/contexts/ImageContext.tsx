import { useState, createContext, FC, ReactNode} from "react";
import IImageContext from "../interfaces/IImageContext";
import ImageService from "../services/ImageService";


export const ImageContext = createContext<IImageContext | null>(null);

interface Props {
    children: ReactNode;
}

export const ImageContextProvider: FC<Props> = ({ children }) => {
    const [images, setImages] = useState<string[]>([]);
    
    const getAllImages = async () => {
        const images = await ImageService.getAllImages()
        setImages(images);
    };

    return (
        <ImageContext.Provider value={{ images, getAllImages }}>
            {children}
        </ImageContext.Provider>
    );
}