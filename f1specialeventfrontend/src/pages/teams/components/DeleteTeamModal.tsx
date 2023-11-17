import { ChangeEvent, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactModal from 'react-modal';

const DeleteTeamModal = ({
    isOpen,
    setIsOpen,
    removeTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    removeTeam: (id: number) => void;
}) => {
    const [id, setId] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(parseInt(e.currentTarget.value));
                break;
        }
    };

    const deleteTeam = () => {
        removeTeam(id);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete team by ID</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Team ID</label>
                    <input name='id' onChange={handleChange} type='number' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={deleteTeam}>
                    Delete team
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteTeamModal;
