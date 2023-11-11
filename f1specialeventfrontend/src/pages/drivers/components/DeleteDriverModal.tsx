import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import DriversService from '../../../services/DriversService';

const DeleteDriverModal = ({
    isOpen,
    setIsOpen,
    getAllDrivers,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getAllDrivers: () => void;
}) => {
    const [id, setId] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(parseInt(e.currentTarget.value));
                break;
        }
    };

    const deleteDriver = () => {
        DriversService.deleteDriver(id);
        setIsOpen(!isOpen);
    };

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} onAfterClose={() => getAllDrivers()}>
            <form>
                <h3>Delete driver by ID</h3>
                <label className='form-label'>Driver ID</label>
                <input name='id' onChange={handleChange} type='number' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={deleteDriver} type='button' className='btn btn-primary'>
                Delete driver (Non reversable)
            </button>
            <button className='btn btn-primary' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default DeleteDriverModal;
