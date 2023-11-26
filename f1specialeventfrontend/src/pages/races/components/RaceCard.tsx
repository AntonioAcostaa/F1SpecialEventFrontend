import IRace from '../../../interfaces/IRace';
import format from 'date-fns/format';
import styles from '../styles/raceList.module.css';
import ImageService from '../../../services/ImageService';

const RaceCard = ({ race }: { race: IRace }) => {
    return (
        <article className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-3  m-5`} key={race.id}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img
                        src={`${ImageService.imageURL}${race.image}`}
                        className='rounded w-100 h-100 shadow'
                        alt={`Track image. PNG. ${race.grandPrix}`}
                    />
                </div>
                <div className='col-md-8'>
                    <div className='card-body' style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <h3 className='cardHeader card-title p-3'>{race.grandPrix}</h3>
                        <span>
                            <h5 className='card-text'>Winner:</h5>
                            <p className='card-text'>{race.winnerName}</p>
                        </span>
                        <span>
                            <h5 className='card-text'>Time:</h5>
                            <p className='card-text'>{format(new Date(race.winnerTime), 'HH:mm:ss')}</p>
                        </span>
                        <p className='card-text'>
                            <small className='id-text'>ID: {race.id}</small>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default RaceCard;
