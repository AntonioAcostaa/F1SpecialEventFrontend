import { ChangeEvent, useContext, useEffect, useState } from 'react';
import DriverList from './components/DriverList';
import AddDriverModal from './components/AddDriverModal';
import DeleteDriverModal from './components/DeleteDriverModal';
import { DriverContext } from '../../contexts/DriverContext';
import IDriverContext from '../../interfaces/IDriverContext';
import EditDriverModal from './components/EditDriverModal';
import { ActivePageContext } from '../../contexts/ActivePageContext';
import IActivePageContext, { ActivePage } from '../../interfaces/IActivePageContext';
import '../../assets/fonts/fonts.css';
import { Accordion, Form } from 'react-bootstrap';
import styles from './styles/driversPage.module.css';
import { TeamContext } from '../../contexts/TeamContext';
import ITeamContext from '../../interfaces/ITeamContext';
import IDriver from '../../interfaces/IDriver';

const DriversPage = () => {
    const [addDriverModalIsOpen, setAddDriverModalIsOpen] = useState(false);
    const [deleteDriverModalIsOpen, setDeleteDriverModalIsOpen] = useState(false);
    const [updateDriverModalIsOpen, setUpdateDriverModalIsOpen] = useState(false);

    const { drivers, getAllDrivers, getDriverByName, addDriver, removeDriver, updateDriver } = useContext(DriverContext) as IDriverContext;
    const { teams, getAllTeams } = useContext(TeamContext) as ITeamContext;
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.drivers);
        getAllDrivers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [selectedTeamId, setSelectedTeamId] = useState(0);
    const [driverName, setDriverName] = useState<string>('');
    const [selectedTeam, setSelectedTeam] = useState('blank');

    const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
        setDriverName(e.target.value);

        if (e.currentTarget.value === '') {
            getAllDrivers();
        } else {
        getDriverByName(e.currentTarget.value);
        }
    };

    const handleFilterbyTeam = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTeamId(parseInt(e.target.value));
        filteredDriversByTeam();
    }

    const filteredDriversByTeam = () => {
        const selectedTeam = teams.find((team) => team.id === selectedTeamId);
        let filteredDriversByTeam: IDriver[] = [];

        if (selectedTeam) {
            filteredDriversByTeam = drivers.filter((driver) => driver.name === selectedTeam.driver1 || driver.name === selectedTeam.driver2);
        }
        return filteredDriversByTeam
    };

    const clearFilter = () => {
        setSelectedTeamId(0);
        setDriverName('');
        getAllDrivers();
        setSelectedTeam('blank');
    }

    return (
        <>
            <div className=' container p-3'>
                <div className={styles.buttonContainer}>
                    <button className='btn btn-danger mx-1' onClick={() => setAddDriverModalIsOpen(!addDriverModalIsOpen)}>
                        Add driver
                    </button>
                    <button className='btn btn-danger' onClick={() => setDeleteDriverModalIsOpen(!deleteDriverModalIsOpen)}>
                        Delete driver
                    </button>
                    <button className='btn btn-danger mx-1' onClick={() => setUpdateDriverModalIsOpen(!updateDriverModalIsOpen)}>
                        Update driver
                    </button>
                    <Accordion className={styles.accordion} onClick={getAllTeams}>
                        <Accordion.Item eventKey='0' onClick={() => getAllTeams}>
                            <Accordion.Header>Filters</Accordion.Header>
                            <Accordion.Body className={styles.filterBody}>
                                <label className='form-label'>Search by name or select team</label>
                                <input name='search' placeholder='Search name' value={driverName}  onChange={(e) => handleSearchByName(e)} type='text' className='form-control' />
                                <Form.Select aria-label='Select team' value={selectedTeam} onChange={(e) => { handleFilterbyTeam(e); setSelectedTeam(e.target.value); }} disabled={driverName !== ''}>
                                    <option key='blankChoice' hidden value='blank'>
                                        -- Select team to view --
                                    </option>
                                    {teams.map((team) => (
                                        <option key={team.id} value={team.id}>
                                            {team.manufacturer}
                                        </option>
                                    ))}
                                </Form.Select>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button className='btn btn-danger mt-2' onClick={() => clearFilter()}>
                                        Clear filter
                                    </button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className=' header col-12 mx-auto text-center rounded p-4 border-top border-5 border-danger border-end mb-1 mt-3'>
                    <h1>F1 Drivers 2023</h1>
                </div>
                <div className='container'>{drivers && drivers.length !== 0 && <DriverList drivers={selectedTeamId ? filteredDriversByTeam() : drivers} />}</div>
            </div>
            {addDriverModalIsOpen && <AddDriverModal isOpen={addDriverModalIsOpen} setIsOpen={setAddDriverModalIsOpen} addDriver={addDriver} />}
            {deleteDriverModalIsOpen && (
                <DeleteDriverModal
                    isOpen={deleteDriverModalIsOpen}
                    setIsOpen={setDeleteDriverModalIsOpen}
                    drivers={drivers}
                    removeDriver={removeDriver}
                />
            )}
            {updateDriverModalIsOpen && (
                <EditDriverModal
                    isOpen={updateDriverModalIsOpen}
                    setIsOpen={setUpdateDriverModalIsOpen}
                    drivers={drivers}
                    updateDriver={updateDriver}
                />
            )}
        </>
    );
};

export default DriversPage;
