import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import IDriver from '../../../interfaces/IDriver';

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
        updateDriver(updatedDriver, image as File)
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
            <form>
                <h3>Edit driver</h3>
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
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={saveDriver} type='button' className='btn btn-danger'>
                Save driver
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default EditDriverModal;
