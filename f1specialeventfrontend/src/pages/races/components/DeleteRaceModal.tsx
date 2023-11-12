import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';

const DeleteRaceModal = ({
    isOpen,
    setIsOpen,
    removeRace,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    removeRace: (id: number) => void;
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
        removeRace(id);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
            <form>
                <h3>Delete race by ID</h3>
                <label className='form-label'>Race ID</label>
                <input name='id' onChange={handleChange} type='number' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={deleteDriver} type='button' className='btn btn-danger'>
                Delete race (Non reversable)
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default DeleteRaceModal;
