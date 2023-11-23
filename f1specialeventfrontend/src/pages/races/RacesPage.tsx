import { ChangeEvent, useContext, useEffect, useState } from 'react';
//import format from "date-fns/format";
import RaceList from './components/RaceList';
import { RaceContext } from '../../contexts/RaceContext';
import IRaceContext from '../../interfaces/IRaceContext';
import { ActivePageContext } from '../../contexts/ActivePageContext';
import IActivePageContext, { ActivePage } from '../../interfaces/IActivePageContext';
import AddRaceModal from './components/AddRaceModal';
import DeleteRaceModal from './components/DeleteRaceModal';
import EditRaceModal from './components/EditRaceModal';
import '../../assets/fonts/fonts.css';
import styles from './styles/racesPage.module.css';
import { Accordion } from 'react-bootstrap';
import Footer from '../../components/shared/Footer';

const RacesPage = () => {
    const [addRaceModalIsOpen, setAddRaceModalIsOpen] = useState(false);
    const [deleteRaceModalIsOpen, setDeleteRaceModalIsOpen] = useState(false);
    const [updateRaceModalIsOpen, setUpdateRaceModalIsOpen] = useState(false);

    const { races, getAllRaces, getRacesByGrandPrix, getRacesByWinner, addRace, removeRace, updateRace } = useContext(RaceContext) as IRaceContext;
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;

    const [winnerName, setWinnerName] = useState<string>('');
    const [trackName, setTrackName] = useState<string>('');
    useEffect(() => {
        setActivePage(ActivePage.races);
        getAllRaces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;

        switch (name) {
            case 'track-name':
                setTrackName(e.target.value);
                if (e.currentTarget.value === '') {
                    getAllRaces();
                } else {
                    getRacesByGrandPrix(e.target.value);
                }
                break;
            case 'winner-name':
                setWinnerName(e.target.value);
                if (e.currentTarget.value === '') {
                    getAllRaces();
                } else {
                    getRacesByWinner(e.target.value);
                }
                break;
        }
    };

    const clearFilter = () => {
        setTrackName('');
        setWinnerName('');
        getAllRaces();
    };

    return (
        <>
            <div className='container p-3'>
                <header className={`buttonsFont container p-2 ${styles.buttonContainer}`}>
                    <button className='btn btn-danger mx-1' onClick={() => setAddRaceModalIsOpen(!addRaceModalIsOpen)}>
                        Add race
                    </button>
                    <button className='btn btn-danger mx-1' onClick={() => setDeleteRaceModalIsOpen(!deleteRaceModalIsOpen)}>
                        Delete race
                    </button>
                    <button className='btn btn-danger mx-1' onClick={() => setUpdateRaceModalIsOpen(!updateRaceModalIsOpen)}>
                        Update race
                    </button>
                    <Accordion className={styles.accordion}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Filters</Accordion.Header>
                            <Accordion.Body className={styles.filterBody}>
                                <label className='form-label'>Search by trackname or winnername</label>
                                <input
                                    name='track-name'
                                    placeholder='Search track'
                                    value={trackName}
                                    onChange={(e) => handleSearch(e)}
                                    type='text'
                                    className='form-control'
                                    disabled={winnerName !== ''}
                                />
                                <input
                                    name='winner-name'
                                    placeholder='Search winner'
                                    value={winnerName}
                                    onChange={(e) => handleSearch(e)}
                                    type='text'
                                    className='form-control'
                                    disabled={trackName !== ''}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                    <button className='btn btn-danger mt-2' onClick={() => clearFilter()}>
                                        Clear filter
                                    </button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </header>
                <section className='header col-12 mx-auto rounded text-center p-4 border-top border-5 border-danger border-end mb-1 mt-3'>
                    <h1>F1 Race Results 2023</h1>
                </section>
                <div className='col-12 text-start'>{races.length !== 0 && <RaceList races={races} />}</div>
                {addRaceModalIsOpen && <AddRaceModal isOpen={addRaceModalIsOpen} setIsOpen={setAddRaceModalIsOpen} addRace={addRace} />}
                {deleteRaceModalIsOpen && (
                    <DeleteRaceModal isOpen={deleteRaceModalIsOpen} setIsOpen={setDeleteRaceModalIsOpen} races={races} removeRace={removeRace} />
                )}
                {updateRaceModalIsOpen && (
                    <EditRaceModal isOpen={updateRaceModalIsOpen} setIsOpen={setUpdateRaceModalIsOpen} races={races} updateRace={updateRace} />
                )}
            </div>
            <Footer />
        </>
    );
};

export default RacesPage;
