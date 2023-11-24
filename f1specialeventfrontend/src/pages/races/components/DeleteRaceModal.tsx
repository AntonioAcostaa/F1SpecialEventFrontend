import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import IRace from '../../../interfaces/IRace';

const DeleteRaceModal = ({
    isOpen,
    setIsOpen,
    races,
    removeRace,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    races: IRace[];
    removeRace: (id: number) => void;
}) => {

    const [id, setId] = useState<number>(0);

    const deleteRace = () => {
        removeRace(id);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete race</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <Form.Select aria-label='Select team' onChange={(e) => setId(parseInt(e.target.value))}>
                    <option key='blankChoice' hidden value="blank">-- Select race to delete --</option>
                        {races.map((race) => (
                            <option key={race.id} value={race.id}>{`${race.grandPrix}`}</option>
                            ))}
                    </Form.Select>
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
