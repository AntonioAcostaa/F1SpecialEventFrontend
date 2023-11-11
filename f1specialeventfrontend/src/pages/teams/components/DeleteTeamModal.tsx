import { ChangeEvent, useState } from 'react';
import ReactModal from 'react-modal';

const DeleteTeamModal = ({
    isOpen,
    setIsOpen,
    getAllTeams,
    removeTeam,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getAllTeams: () => void;
    removeTeam: (id: number) => void;
}) => {
    const [id, setId] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(parseInt(e.currentTarget.value));
                break;
        }
    };

    const deleteTeam = () => {
        removeTeam(id);
        setIsOpen(!isOpen);
    };

    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)} onAfterClose={() => getAllTeams()}>
            <form>
                <h3>Delete team by ID</h3>
                <label className='form-label'>Team ID</label>
                <input name='id' onChange={handleChange} type='number' className='form-control' />
            </form>
            <div className='d-flex justify-content-between mt-2'>
            <button onClick={deleteTeam} type='button' className='btn btn-danger'>
                Delete team (Non reversable)
            </button>
            <button className='btn btn-danger' onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            </div>
        </ReactModal>
    );
};

export default DeleteTeamModal;
