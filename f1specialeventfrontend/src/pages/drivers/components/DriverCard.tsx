import IDriver from "../../../interfaces/IDriver";
import styles from "../styles/driverList.module.css";

const DriverCard = ({ driver }: { driver: IDriver }) => {
    return (
        <article
            className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-1 m-4`}
            style={{ width: "300px", padding: 0 }}
        >
            <img
                src={`http://localhost:5014/images/${driver.image}`}
                className="card-img-top rounded"
                alt={`Portret image. PNG. ${driver.name}`}
            />
            <div className="card-body ">
                <h5 className="card-title p-1">{driver.name}</h5>
                <div className="card-text p-2 text-start">
                    <div className="d-flex gap-2">
                        <p style={{ margin: 0, fontWeight: "700" }}>Age:</p>{" "}
                        {driver.age}
                    </div>
                    <div className="d-flex gap-2">
                        <p style={{ margin: 0, fontWeight: "700" }}>From:</p>{" "}
                        {driver.nationality}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">Driver ID: {driver.id}</small>
            </div>
        </article>
    );
};

export default DriverCard;
