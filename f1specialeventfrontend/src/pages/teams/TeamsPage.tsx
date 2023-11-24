import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import ITeamContext from '../../interfaces/ITeamContext';
import AddTeamModal from './components/AddTeamModal';
import DeleteTeamModal from './components/DeleteTeamModal';
import EditTeamModal from './components/EditTeamModal';
import { ActivePageContext } from '../../contexts/ActivePageContext';
import IActivePageContext, { ActivePage } from '../../interfaces/IActivePageContext';
import '../../assets/fonts/fonts.css';
import styles from './styles/teamsPage.module.css';
import { Accordion } from 'react-bootstrap';
import Footer from '../../components/shared/Footer';
import TeamList from './components/Teamslist';

const TeamsPage = () => {
    const [addTeamModalIsOpen, setAddTeamModalIsOpen] = useState<boolean>(false);
    const [deleteTeamModalIsOpen, setDeleteTeamModalIsOpen] = useState<boolean>(false);
    const [updateTeamModalIsOpen, setUpdateTeamModalIsOpen] = useState<boolean>(false);
    
    const [teamName, setTeamName] = useState<string>('');

    const { teams, getAllTeams, getTeamsByName, addTeam, removeTeam, updateTeam } = useContext(TeamContext) as ITeamContext;
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.teams);
        getAllTeams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
        setTeamName(e.target.value);

        if (e.currentTarget.value === '') {
            getAllTeams();
        } else {
            getTeamsByName(e.currentTarget.value);
        }
    };

    const clearFilter = () => {
        setTeamName('');
        getAllTeams();
    };

    return (
        <>
            <div className='container p-3'>
                <header className={`buttonsFont container p-2 ${styles.buttonContainer}`}>
                    <button className='btn btn-danger mx-1' onClick={() => setAddTeamModalIsOpen(!addTeamModalIsOpen)}>
                        Add team
                    </button>
                    <button className='btn btn-danger' onClick={() => setDeleteTeamModalIsOpen(!deleteTeamModalIsOpen)}>
                        Delete team
                    </button>
                    <button className='btn btn-danger mx-1' onClick={() => setUpdateTeamModalIsOpen(!updateTeamModalIsOpen)}>
                        Update team
                    </button>
                    <Accordion className={styles.accordion}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Filters</Accordion.Header>
                            <Accordion.Body className={styles.filterBody}>
                                <label className='form-label'>Search by team name</label>
                                <input
                                    name='search'
                                    placeholder='Search name'
                                    value={teamName}
                                    onChange={(e) => handleSearchByName(e)}
                                    type='text'
                                    className='form-control'
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
                <section className='header col-12 mx-auto text-center rounded p-4 border-top border-5 border-danger border-end mb-1 mt-3'>
                    <h1>F1 Teams 2023</h1>
                </section>
                <section className='container'>{teams && teams.length !== 0 && <TeamList teams={teams} />}</section>
                {addTeamModalIsOpen && <AddTeamModal isOpen={addTeamModalIsOpen} setIsOpen={setAddTeamModalIsOpen} addTeam={addTeam} />}
                {deleteTeamModalIsOpen && (
                    <DeleteTeamModal isOpen={deleteTeamModalIsOpen} setIsOpen={setDeleteTeamModalIsOpen} teams={teams} removeTeam={removeTeam} />
                )}
                {updateTeamModalIsOpen && (
                    <EditTeamModal isOpen={updateTeamModalIsOpen} setIsOpen={setUpdateTeamModalIsOpen} teams={teams} updateTeam={updateTeam} />
                )}
            </div>
            <Footer />
        </>
    );
};

export default TeamsPage;
