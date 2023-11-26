import ITeam from '../../../interfaces/ITeam';
import styles from '../styles/teamList.module.css';
import '../../../assets/fonts/fonts.css';
import ImageService from "../../../services/ImageService";

const TeamCard = ({ team }: { team: ITeam }) => {
    return (
        <article
            className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-3  m-5`}
            style={{ width: '500px', padding: 0 }}>
            <img src={`${ImageService.imageURL}${team.image}`} className='card-img-top' alt={`Portret image. PNG. ${team.manufacturer}`} />
            <div className='card-body' style={{ display: 'flex', flexDirection: 'column' }}>
                <h5 className='cardHeader card-title'>{team.manufacturer}</h5>
                <span>First driver: {team.driver1}</span>
                <span>Second driver: {team.driver2}</span>
                <span>Points: {team.points}</span>
            </div>
            <div className='card-footer'>
                <small className='text-muted'>Team ID: {team.id}</small>
            </div>
        </article>
    );
};

export default TeamCard;
