import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import IDriver from '../../../interfaces/IDriver';
import { Button, Modal } from 'react-bootstrap';

const EditDriverModal = ({
    isOpen,
    setIsOpen,
    updateDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    updateDriver: (updatedDriver: IDriver, image: File) => void;
}) => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState<number>(0);
    const [nationality, setNationality] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(parseInt(e.currentTarget.value));
                break;
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'age':
                setAge(parseInt(e.currentTarget.value));
                break;
            case 'nationality':
                setNationality(e.currentTarget.value);
                break;
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const saveDriver = () => {
        const updatedDriver = {
            id: id,
            name: name,
            age: age,
            nationality: nationality,
            image: image?.name,
        };
        updateDriver(updatedDriver, image as File);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>ID</label>
                    <input name='id' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Name</label>
                    <input name='name' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Age</label>
                    <input name='age' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Nationality</label>
                    <input name='nationality' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Image</label>
                    <input name='image' onChange={handleChange} type='file' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={saveDriver}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditDriverModal;
