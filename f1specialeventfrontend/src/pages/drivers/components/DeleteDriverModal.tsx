import { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactModal from 'react-modal';

const DeleteDriverModal = ({
    isOpen,
    setIsOpen,
    removeDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
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
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Driver ID</label>
                    <input name='id' onChange={handleChange} type='number' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={deleteDriver}>
                    Delete driver
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteDriverModal;
