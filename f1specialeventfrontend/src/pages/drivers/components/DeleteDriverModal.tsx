import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import ReactModal from 'react-modal';
import IDriver from '../../../interfaces/IDriver';

const DeleteDriverModal = ({
    isOpen,
    setIsOpen,
    drivers,
    removeDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    drivers: IDriver[];
    removeDriver: (id: number) => void;
}) => {
    const [id, setId] = useState<number>(0);

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
                <Form.Select aria-label='Select team' onChange={(e) => setId(parseInt(e.target.value))}>
                    <option key='blankChoice' hidden value="blank">-- Select driver to delete --</option>
                        {drivers.map((driver) => (
                            <option key={driver.id} value={driver.id}>{driver.name}</option>
                            ))}
                    </Form.Select>
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
