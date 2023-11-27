import { ChangeEvent, useState } from 'react';
import IRace from '../../../interfaces/IRace';
import { Modal, Button } from 'react-bootstrap';

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

    const postRace = () => {
        const newRace = {
            winnerName: winnerName,
            winnerTime: winnerTime,
            grandPrix: grandPrix,
            numberOfLaps: numberOfLaps,
            image: image?.name,
        };
        addRace(newRace, image as File);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Add new race</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className='form-label'>Winner name</label>
                    <input name='winnername' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Winner time</label>
                    <input name='winnertime' onChange={handleChange} type='datetime-local' step={1} className='form-control' />
                    <label className='form-label'>Grand prix</label>
                    <input name='grandprix' onChange={handleChange} type='text' className='form-control' />
                    <label className='form-label'>Image</label>
                    <input name='image' onChange={handleChange} type='file' className='form-control' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={postRace}>
                    Save race
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddRaceModal;
