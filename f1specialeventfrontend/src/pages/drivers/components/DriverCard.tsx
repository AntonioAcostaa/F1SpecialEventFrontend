import IDriver from "../../../interfaces/IDriver";

const DriverCard = ({ driver }: { driver: IDriver }) => {
    return (
        <article className="card col-12 col-md-10 col-lg-2 align-content-center" style={{width: "200px"}}>
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
