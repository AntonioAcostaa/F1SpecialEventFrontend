import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import ITeam from '../../../interfaces/ITeam';

const AddTeamModal = ({
    isOpen,
    setIsOpen,
    getAllTeams,
    addTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getAllTeams: () => void;
    addTeam: (team: ITeam, image: File) => void;
}) => {
    const [manufacturer, setManuFacturer] = useState('');
    const [driver1, setDriver1] = useState('');
    const [driver2, setDriver2] = useState('');
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
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const saveTeam = () => {
        const newTeam = {
            manufacturer: manufacturer,
            driver1: driver1,
            driver2: driver2,
            image: image?.name,
        };
        addTeam(newTeam, image as File)
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} onAfterClose={() => getAllTeams()}>
            <form>
                <h3>Add new team</h3>
                <label className='form-label'>Manufacturer</label>
                <input name='manufacturer' onChange={handleChange} type='text' className='form-control' />
                <label className='form-label'>First driver</label>
                <input name='driver-one' onChange={handleChange} type='text' className='form-control' />
                <label className='form-label'>Second driver</label>
                <input name='driver-two' onChange={handleChange} type='text' className='form-control' />
                <label className='form-label'>Image</label>
                <input name='image' onChange={handleChange} type='file' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={saveTeam} type='button' className='btn btn-danger'>
                Save team
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default AddTeamModal;