import { ChangeEvent, useState } from 'react';
import ITeam from '../../../interfaces/ITeam';
import { Modal, Button, Form } from 'react-bootstrap';

const EditTeamModal = ({
    isOpen,
    setIsOpen,
    teams,
    updateTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    teams: ITeam[];
    updateTeam: (updatedTeam: ITeam, image: File) => void;
}) => {
    const [id, setId] = useState<number>(0);
    const [selectedTeam, setSelectedTeam] = useState<ITeam>();
    const [manufacturer, setManufacturer] = useState<string>('');
    const [driver1, setDriver1] = useState<string>('');
    const [driver2, setDriver2] = useState<string>('');
    const [imageName, setImageName] = useState<string>('');
    const [points, setPoints] = useState<number>(0);
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
            case 'points':
                setPoints(parseInt(e.currentTarget.value));
                break;
            case 'image':
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const findSelectedTeam = (id: number) => {
        const selectedTeam = teams.find((team) => team.id === id);
        setSelectedTeam(selectedTeam);

        if (selectedTeam !== undefined && selectedTeam.id && selectedTeam.image) {
            setId(selectedTeam.id);
            setManufacturer(selectedTeam.manufacturer);
            setDriver1(selectedTeam.driver1);
            setDriver2(selectedTeam.driver2);
            setPoints(selectedTeam.points);
            setImageName(selectedTeam.image);
        }
    };

    const putTeam = () => {
        const updatedTeam = {
            id: id,
            manufacturer: manufacturer,
            driver1: driver1,
            driver2: driver2,
            points: points,
            image: image?.name ?? selectedTeam?.image,
        };
        updateTeam(updatedTeam, (image as File) ?? null);
        setIsOpen(!isOpen);
    };

    return (
        <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Select aria-label='Select team' onChange={(e) => findSelectedTeam(parseInt(e.target.value))}>
                        <option key='blankChoice' hidden value='blank'>
                            -- Select driver to edit --
                        </option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.manufacturer}
                            </option>
                        ))}
                    </Form.Select>
                    {selectedTeam && (
                        <>
                            <label className='form-label'>Manufacturer</label>
                            <input name='manufacturer' value={manufacturer} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>First driver</label>
                            <input name='driver-one' value={driver1} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Second driver</label>
                            <input name='driver-two' value={driver2} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Points</label>
                            <input name='points' value={points} onChange={handleChange} type='number' className='form-control' />
                            <label className='form-label'>Current image</label>
                            <input name='image-name' value={imageName} onChange={handleChange} type='text' className='form-control' />
                            <label className='form-label'>Image</label>
                            <input name='image' onChange={handleChange} type='file' className='form-control' />
                        </>
                    )}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => setIsOpen(!isOpen)}>
                    Close
                </Button>
                <Button variant='danger' onClick={putTeam}>
                    Update team
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTeamModal;
