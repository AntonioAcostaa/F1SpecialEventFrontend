import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    HomePage,
    DriversPage,
    TeamsPage,
    RacesPage,
    QuizPage,
    NotFoundPage,
} from "../pages";
import Navigation from "../Components/shared/Navigation";
import { DriverContextProvider } from "../contexts/DriverContext";
import { TeamContextProvider } from "../contexts/TeamContext";
import { ActivePageContextProvider } from "../contexts/ActivePageContext";
import { RaceContextProvider } from "../contexts/RaceContext";
import { ImageContextProvider } from "../contexts/ImageContext";

const Router = () => {
    return (
        <BrowserRouter>
            <ActivePageContextProvider>
                <ImageContextProvider>
                    <Navigation />
                    <RaceContextProvider>
                        <TeamContextProvider>
                            <DriverContextProvider>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route
                                        path="/drivers"
                                        element={<DriversPage />}
                                    />
                                    <Route
                                        path="/teams"
                                        element={<TeamsPage />}
                                    />
                                    <Route
                                        path="/races"
                                        element={<RacesPage />}
                                    />
                                    <Route
                                        path="/quiz"
                                        element={<QuizPage />}
                                    />
                                    <Route
                                        path="*"
                                        element={<NotFoundPage />}
                                    />
                                </Routes>
                            </DriverContextProvider>
                        </TeamContextProvider>
                    </RaceContextProvider>
                </ImageContextProvider>
            </ActivePageContextProvider>
        </BrowserRouter>
    );
};

export default Router;
