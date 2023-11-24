import { ChangeEvent, useState } from 'react';
import ITeam from '../../../interfaces/ITeam';
import { Modal, Button } from 'react-bootstrap';

const AddTeamModal = ({
    isOpen,
    setIsOpen,
    addTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    addTeam: (team: ITeam, image: File) => void;
}) => {
    const [manufacturer, setManuFacturer] = useState<string>('');
    const [driver1, setDriver1] = useState<string>('');
    const [driver2, setDriver2] = useState<string>('');
    const [points, setPoints] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'manufacturer':
                setManuFacturer(e.currentTarget.value);
                break;
            case 'driver-one':
                setDriver1(e.currentTarget.value);
                break;
            case 'driver-two':
                setDriver2(e.currentTarget.value);
                break;
            case 'points':
                setPoints(parseInt(e.currentTarget.value));
                break;
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const postTeam = () => {
        const newTeam = {
            manufacturer: manufacturer,
            driver1: driver1,
            driver2: driver2,
            points: points,
            image: image?.name,
        };
        addTeam(newTeam, image as File);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Add new team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Manufacturer</label>
                    <input name='manufacturer' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>First driver</label>
                    <input name='driver-one' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Second driver</label>
                    <input name='driver-two' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Points</label>
                    <input name='points' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Image</label>
                    <input name='image' onChange={handleChange} type='file' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={postTeam}>
                    Save team
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddTeamModal;
