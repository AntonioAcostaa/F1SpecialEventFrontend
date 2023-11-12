import IDriver from "../../../interfaces/IDriver";
import styles from "../styles/driverList.module.css";

const DriverCard = ({ driver }: { driver: IDriver }) => {
    return (
        <article
            className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-3 m-1`}
            style={{ width: "200px", padding: 0 }}
        >
            <img
                src={`http://localhost:5014/images/${driver.image}`}
                className="card-img-top"
                alt={`Portret image. PNG. ${driver.name}`}
            />
            <div className="card-body">
                <h5 className="card-title">{driver.name}</h5>
                <p className="card-text">
                    Age: {driver.age}
                    <br></br>
                    From: {driver.nationality}
                </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Driver ID: {driver.id}</small>
            </div>
        </article>
    );
};

export default DriverCard;
