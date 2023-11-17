import { ChangeEvent, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
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

    const deleteRace = () => {
        removeRace(id);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete race by ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Race ID</label>
                    <input name='id' onChange={handleChange} type='number' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={deleteRace}>
                    Delete race
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteRaceModal;
