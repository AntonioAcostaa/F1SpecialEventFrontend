import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, DriversPage, TeamsPage, RacesPage, NotFoundPage } from '../pages';
import Navigation from './Navigation';
import { DriverContextProvider } from '../contexts/DriverContext';
import { TeamContextProvider } from '../contexts/TeamContext';
import { ActivePageContextProvider } from '../contexts/ActivePageContext';

//BrowserRouter er en komponent soom sørger for at React har kontroll på hva som skal åpnes hvor.
// Navigation er en komponent som inneholder lenker til de ulike sidene i applikasjonen
// Routes definerer hvilke komponenter som skal rendres for hvilke URLer
const Router = () => {
    return (
        <BrowserRouter>
        <ActivePageContextProvider>
            <Navigation />
            <TeamContextProvider>
                <DriverContextProvider>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/drivers' element={<DriversPage />} />
                        <Route path='/teams' element={<TeamsPage />} />
                        <Route path='/races' element={<RacesPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </DriverContextProvider>
            </TeamContextProvider>
            </ActivePageContextProvider>
        </BrowserRouter>
    );
};

export default Router;
