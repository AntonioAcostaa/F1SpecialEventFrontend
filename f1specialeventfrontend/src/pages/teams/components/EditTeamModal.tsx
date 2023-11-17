import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import ITeam from '../../../interfaces/ITeam';
import { Modal, Button } from 'react-bootstrap';

const EditTeamModal = ({
    isOpen,
    setIsOpen,
    updateTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    updateTeam: (updatedTeam: ITeam, image: File) => void;
}) => {
    const [id, setId] = useState<number>(0);
    const [manufacturer, setManufacturer] = useState('');
    const [driver1, setDriver1] = useState('');
    const [driver2, setDriver2] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(parseInt(e.currentTarget.value));
                break;
            case 'manufacturer':
                setManufacturer(e.currentTarget.value);
                break;
            case 'driver-one':
                setDriver1(e.currentTarget.value);
                break;
            case 'driver-two':
                setDriver2(e.currentTarget.value);
                break;
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const saveTeam = () => {
        const updatedTeam = {
            id: id,
            manufacturer: manufacturer,
            driver1: driver1,
            driver2: driver2,
            image: image?.name,
        };
        updateTeam(updatedTeam, image as File);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>ID</label>
                    <input name='id' onChange={handleChange} type='number' className='form-control' />
                    <label className='form-label'>Manufacturer</label>
                    <input name='manufacturer' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>First driver</label>
                    <input name='driver-one' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Second driver</label>
                    <input name='driver-two' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Image</label>
                    <input name='image' onChange={handleChange} type='file' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={saveTeam}>
                    Update team
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTeamModal;
