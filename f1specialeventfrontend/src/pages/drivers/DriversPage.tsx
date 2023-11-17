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

const DriversPage = () => {
    const [addDriverModalIsOpen, setAddDriverModalIsOpen] = useState(false);
    const [deleteDriverModalIsOpen, setDeleteDriverModalIsOpen] = useState(false);
    const [updateDriverModalIsOpen, setUpdateDriverModalIsOpen] = useState(false);

    const { drivers, getAllDrivers, getDriverByName, addDriver, removeDriver, updateDriver } = useContext(DriverContext) as IDriverContext;
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.drivers);
        getAllDrivers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const [id, setId] = useState(0);
    // const [driverName, setDriverName] = useState('');

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setDriverName(e.currentTarget.value);
    // };

    // const search = () => {
    //     getDriverByName(driverName);
    // };

    return (
        <>
            <div className='container p-3'>
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
                    <Accordion className={styles.accordion}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Filters</Accordion.Header>
                            <Accordion.Body>
                                <form>
                                    <label className='form-label'>Search by name</label>
                                    <input name='search' 
                                        //onChange={handleChange} 
                                        type='text' 
                                        className='form-control' 
                                    />
                                    {/* <Form.Select aria-label='Select team' onChange={(e) => setId(parseInt(e.target.value))}>
                                        <option key='blankChoice' hidden value='blank'>
                                            -- Select team to view --
                                        </option>
                                        {drivers.map((driver) => (
                                            <option key={driver.id} value={driver.id}>
                                                {driver.name}
                                            </option>
                                        ))}
                                    </Form.Select> */}
                                    <button className='btn btn-danger mt-2' 
                                    //onClick={search}
                                    >
                                        Search
                                    </button>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='col-12 mx-auto text-center rounded p-4 border-top border-5 border-danger border-end mb-1 mt-3'>
                    <h1>F1 Drivers 2023</h1>
                </div>
                <div className='container'>{drivers && drivers.length !== 0 && <DriverList drivers={drivers} />}</div>
            </div>
            {addDriverModalIsOpen && (
            <AddDriverModal 
                isOpen={addDriverModalIsOpen} 
                setIsOpen={setAddDriverModalIsOpen} 
                addDriver={addDriver} 
                />
            )}
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
