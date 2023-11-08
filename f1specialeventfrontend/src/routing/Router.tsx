import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, DriversPage, TeamsPage, RacesPage, NotFoundPage } from '../pages';
import Navigation from './Navigation';

const Router = () => {     
    return (
        <BrowserRouter>     // BrowserRouter er en komponent soom sørger for at React har kontroll på hva som skal åpnes hvor.
            <Navigation />  // Navigation er en komponent som inneholder lenker til de ulike sidene i applikasjonen
            <Routes>    // Routes definerer hvilke komponenter som skal rendres for hvilke URLer
                <Route path='/' element={<HomePage />} />
                <Route path='/drivers' element={<DriversPage />} />
                <Route path='/teams' element={<TeamsPage />} />
                <Route path='/races' element={<RacesPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
