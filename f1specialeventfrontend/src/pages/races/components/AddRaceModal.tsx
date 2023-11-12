import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';
import IRace from '../../../interfaces/IRace';

const AddRaceModal = ({
    isOpen,
    setIsOpen,
    addRace,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    addRace: (race: IRace, image: File) => void;
}) => {
    const [winnerName, setWinnerName] = useState('');
    const [winnerTime, setWinnerTime] = useState<Date>(new Date());
    const [grandPrix, setGrandPrix] = useState('');
    const [numberOfLaps, setNumberOfLaps] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'winnername':
                setWinnerName(e.currentTarget.value);
                break;
            case 'winnertime':
                setWinnerTime(new Date(e.currentTarget.value));
                break;
            case 'grandprix':
                setGrandPrix(e.currentTarget.value);
                break;
                case 'numberoflaps':
                setNumberOfLaps(parseInt(e.currentTarget.value));
                break;
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const saveRace = () => {
        const newRace = {
            winnerName: winnerName,
            winnerTime: winnerTime,
            grandPrix: grandPrix,
            numberOfLaps: numberOfLaps,
            image: image?.name,
        };
        addRace(newRace, image as File)
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
            <form>
                <h3>Add new driver</h3>
                <label className='form-label'>Winner name</label>
                <input name='winnername' onChange={handleChange} type='text' className='form-control' />
                <label className='form-label'>Winner time</label>
                <input name='winnertime' onChange={handleChange} type='datetime-local' step={1} className='form-control' />
                <label className='form-label'>Grand prix</label>
                <input name='grandprix' onChange={handleChange} type='text' className='form-control' />
                <label className='form-label'>Image</label>
                <input name='image' onChange={handleChange} type='file' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={saveRace} type='button' className='btn btn-danger'>
                Save race
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default AddRaceModal;
