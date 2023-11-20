import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactModal from 'react-modal';
import ITeam from '../../../interfaces/ITeam';

const DeleteTeamModal = ({
    isOpen,
    setIsOpen,
    teams,
    removeTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    teams: ITeam[];
    removeTeam: (id: number) => void;
}) => {
    const [id, setId] = useState<number>(0);

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
                    <Form.Select aria-label='Select team' onChange={(e) => setId(parseInt(e.target.value))}>
                    <option key='blankChoice' hidden value="blank">-- Select team to delete --</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>{team.manufacturer}</option>
                            ))}
                    </Form.Select>
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
