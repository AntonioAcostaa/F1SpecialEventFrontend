import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import IDriver from '../../../interfaces/IDriver';
import { Button, Modal } from 'react-bootstrap';

const AddDriverModal = ({
    isOpen,
    setIsOpen,
    addDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    addDriver: (driver: IDriver, image: File) => void;
}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number>(0);
    const [nationality, setNationality] = useState('');
    const [points, setPoints] = useState<number>(0);
    const [team, setTeam] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'age':
                setAge(parseInt(e.currentTarget.value));
                break;
            case 'points':
                setPoints(parseInt(e.currentTarget.value));
                break;
            case 'team':
                setTeam(e.currentTarget.value);
                break;
            case 'nationality':
                setNationality(e.currentTarget.value);
                break;
            case 'image': {
                if (e.currentTarget.files === null) return;
                const file = e.currentTarget.files[0];
                if (file.size > 5000000) {
                    // File size is measured in bytes
                    alert('File size must be less than 5MB');
                    return;
                }
                if (!file.type.startsWith('image/')) {
                    alert('File must be an image');
                    return;
                }
                setImage(file);
                break;
            }
        }
    };

    const postDriver = () => {
        const newDriver = {
            name: name,
            age: age,
            nationality: nationality,
            points: points,
            team: team,
            image: image?.name,
        };
        addDriver(newDriver, image as File);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Add new driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Name</label>
                    <input name='name' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Age</label>
                    <input name='age' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Nationality</label>
                    <input name='nationality' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Points</label>
                    <input name='points' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Team</label>
                    <input name='team' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Image</label>
                    <input name='image' onChange={handleChange} type='file' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={postDriver}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddDriverModal;
