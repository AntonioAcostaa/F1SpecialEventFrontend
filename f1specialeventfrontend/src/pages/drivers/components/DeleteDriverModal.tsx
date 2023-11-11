import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';

const DeleteDriverModal = ({
    isOpen,
    setIsOpen,
    getAllDrivers,
    removeDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getAllDrivers: () => void;
    removeDriver: (id: number) => void;
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
        removeDriver(id);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} onAfterClose={() => getAllDrivers()}>
            <form>
                <h3>Delete driver by ID</h3>
                <label className='form-label'>Driver ID</label>
                <input name='id' onChange={handleChange} type='number' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={deleteDriver} type='button' className='btn btn-danger'>
                Delete driver (Non reversable)
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default DeleteDriverModal;
