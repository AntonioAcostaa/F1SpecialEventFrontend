import { ChangeEvent, useState } from 'react';
import IRace from '../../../interfaces/IRace';
import { Modal, Button, Form } from 'react-bootstrap';

const EditRaceModal = ({
    isOpen,
    setIsOpen,
    races,
    updateRace,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    races: IRace[];
    updateRace: (updatedRace: IRace, image: File) => void;
}) => {
    const [id, setId] = useState<number>(0);
    const [selectedRace, setSelectedRace] = useState<IRace>();
    const [winnerName, setWinnerName] = useState('');
    const [winnerTime, setWinnerTime] = useState<Date>(new Date());
    const [grandPrix, setGrandPrix] = useState('');
    const [numberOfLaps, setNumberOfLaps] = useState<number>(0);
    const [imageName, setImageName] = useState<string>('');
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

    const findSelectedRace = (id: number) => {
        const selectedRace = races.find((race) => race.id === id);
        setSelectedRace(selectedRace);

        if (selectedRace !== undefined && selectedRace.id && selectedRace.image) {
            setId(selectedRace.id);
            setWinnerName(selectedRace.winnerName);
            setWinnerTime(new Date(selectedRace.winnerTime));
            setGrandPrix(selectedRace.grandPrix);
            setNumberOfLaps(selectedRace.numberOfLaps);
            setImageName(selectedRace.image);
        }
    };

    const saveRace = () => {
        const updatedRace = {
            id: id,
            winnerName: winnerName,
            winnerTime: winnerTime,
            grandPrix: grandPrix,
            numberOfLaps: numberOfLaps,
            image: image?.name ?? selectedRace?.image,
        };
        updateRace(updatedRace, (image as File) ?? null);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit race</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Select aria-label='Select team' onChange={(e) => findSelectedRace(parseInt(e.target.value))}>
                        <option key='blankChoice' hidden value='blank'>
                            -- Select race to edit --
                        </option>
                        {races.map((race) => (
                            <option key={race.id} value={race.id}>
                                {race.grandPrix}
                            </option>
                        ))}
                    </Form.Select>
                    {selectedRace && (
                        <>
                            <label className='form-label'>Winner name</label>
                            <input name='winnername' value={winnerName} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Winner time</label>
                            <input
                                name='winnertime'
                                value={winnerTime instanceof Date ? winnerTime.toISOString().substring(0, 19) : ''}
                                onChange={handleChange}
                                type='datetime-local'
                                step={1}
                                className='form-control'
                            />
                            <label className='form-label'>Grand prix</label>
                            <input name='grandprix' value={grandPrix} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Current image</label>
                            <input name='image-name' value={imageName} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>New image</label>
                            <input name='image' onChange={handleChange} type='file' className='form-control' />
                        </>
                    )}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={saveRace}>
                    Update race
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditRaceModal;
