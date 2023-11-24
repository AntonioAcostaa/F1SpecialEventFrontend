import { useContext, useEffect } from 'react';
import '../../assets/fonts/fonts.css';
import { ActivePageContext } from '../../contexts/ActivePageContext';
import IActivePageContext, { ActivePage } from '../../interfaces/IActivePageContext';
import ConstructorsList from './components/ConstructorsList';
import DriversList from './components/DriversList';
import Footer from '../../components/shared/Footer';

const HomePage = () => {
    
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.home);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <header className='pb-3' >
            <img src="./src/assets/images/f1testheader2.png" alt="Header Image. PNG Ferrari and Redbull" style={{width: "100%"}}/>
            </header>
            <main>
                <section className='container'>
                    <div className='row'>
                        <ConstructorsList />
                        <DriversList />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;
