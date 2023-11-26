import { ChangeEvent, useState } from 'react';
import IDriver from '../../../interfaces/IDriver';
import { Button, Form, Modal } from 'react-bootstrap';

const EditDriverModal = ({
    isOpen,
    setIsOpen,
    drivers,
    updateDriver,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    drivers: IDriver[];
    updateDriver: (updatedDriver: IDriver, image: File) => void;
}) => {
    const [id, setId] = useState<number>(0);
    const [selectedDriver, setSelectedDriver] = useState<IDriver>();
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [nationality, setNationality] = useState<string>('');
    const [points, setPoints] = useState<number>(0);
    const [team, setTeam] = useState<string>('');
    const [imageName, setImageName] = useState<string>('');
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
                case 'team':
                setTeam(e.currentTarget.value);
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

    const findSelectedDriver = (id: number) => {
        const selectedDriver = drivers.find((driver) => driver.id === id);
        setSelectedDriver(selectedDriver);

        if (selectedDriver !== undefined && selectedDriver.id && selectedDriver.image) {
            setId(selectedDriver.id);
            setName(selectedDriver.name);
            setAge(selectedDriver.age);
            setNationality(selectedDriver.nationality);
            setTeam(selectedDriver.team);
            setPoints(selectedDriver.points);
            setImageName(selectedDriver.image);
        }
    };

    const putDriver = () => {
        const updatedDriver = {
            id: id,
            name: name,
            age: age,
            nationality: nationality,
            team: team,
            points: points,
            image: image?.name ?? selectedDriver?.image,
        };
        updateDriver(updatedDriver, (image as File) ?? null);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Select aria-label='Select team' onChange={(e) => findSelectedDriver(parseInt(e.target.value))}>
                        <option key='blankChoice' hidden value='blank'>
                            -- Select driver to edit --
                        </option>
                        {drivers.map((driver) => (
                            <option key={driver.id} value={driver.id}>
                                {driver.name}
                            </option>
                        ))}
                    </Form.Select>
                    {selectedDriver && (
                        <>
                            <label className='form-label'>ID</label>
                            <input name='id' value={id} onChange={handleChange} type='number' className='form-control' />
                            <label className='form-label'>Name</label>
                            <input name='name' value={name} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Age</label>
                            <input name='age' value={age} onChange={handleChange} type='number' className='form-control' />
                            <label className='form-label'>Nationality</label>
                            <input name='nationality' value={nationality} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Points</label>
                            <input name='points' value={points} onChange={handleChange} type='number' className='form-control' />
                            <label className='form-label'>Team</label>
                            <input name='team' value={team} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Current image</label>
                            <input name='image-name' value={imageName} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>New image</label>
                            <input name='image-upload' onChange={handleChange} type='file' className='form-control' />
                        </>
                    )}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={putDriver}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditDriverModal;
