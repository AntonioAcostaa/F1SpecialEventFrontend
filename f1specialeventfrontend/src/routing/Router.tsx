import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, DriversPage, TeamsPage, RacesPage, NotFoundPage } from '../pages';
import Navigation from './Navigation';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
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
