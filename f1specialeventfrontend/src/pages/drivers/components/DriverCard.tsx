import IDriver from '../../../interfaces/IDriver';
import styles from '../styles/driverList.module.css';
import '../../../assets/fonts/fonts.css';
import ImageService from '../../../services/ImageService';

const DriverCard = ({ driver }: { driver: IDriver }) => {

    const formattedName = driver.name.replace(/ /g, '-').toLowerCase();
    const url = `https://www.formula1.com/en/drivers/${formattedName}.html`;


    const openDriverPage = () => {
        window.open(url, '_blank');
    };

    return (
        <article
            className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-1 m-4`}
            style={{ width: '300px', padding: 0 }} onClick={openDriverPage}>
            <img src={`${ImageService.imageURL}${driver.image}`} className='card-img-top rounded' alt={`Portret image. PNG. ${driver.name}`} />
            <div className='card-body '>
                <h5 className='cardHeader card-title p-1'>{driver.name}</h5>
                <div className='card-text p-2 text-start'>
                    <div className='d-flex gap-2'>
                        <p style={{ margin: 0, fontWeight: '700' }}>Age:</p> {driver.age}
                    </div>
                    <div className='d-flex gap-2'>
                        <p style={{ margin: 0, fontWeight: '700' }}>From:</p> {driver.nationality}
                    </div>
                    <div className='d-flex gap-2'>
                        <p style={{ margin: 0, fontWeight: '700' }}>Points:</p> {driver.points}
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <small className='text-muted'>Driver ID: {driver.id}</small>
            </div>
        </article>
    );
};

export default DriverCard;
