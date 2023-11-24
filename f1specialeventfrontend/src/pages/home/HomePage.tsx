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
            <header
                className='p-5 text-center bg-image align-items-center d-flex flex-column justify-content-center border-bottom border-danger mb-2'
                style={{
                    backgroundImage: `url(./src/assets/images/ferrarivredbull2.png)`,
                    backgroundPosition: 'center',
                    height: '380px',
                }}></header>
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
