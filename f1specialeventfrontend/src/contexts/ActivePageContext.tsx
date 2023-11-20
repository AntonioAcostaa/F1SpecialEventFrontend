import { useState, createContext, FC, ReactNode } from "react";
import IActivePage, { ActivePage } from "../interfaces/IActivePageContext";

export const ActivePageContext = createContext<IActivePage | null>(null);

interface Props {
    children: ReactNode;
}

export const ActivePageContextProvider: FC<Props> = ({ children }) => {
    
    const [activePage, setActivePage] = useState<ActivePage>(ActivePage.home);


    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage}}>
            {children}
        </ActivePageContext.Provider>
    );
}