import ITeam from "../../../interfaces/ITeam";
import styles from "../styles/teamList.module.css";
import "../../../assets/fonts/fonts.css";

const TeamCard = ({ team }: { team: ITeam }) => {
    return (
        <article
            className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-3  m-5`}
            style={{ width: "500px", padding: 0 }}
        >
            <img
                src={`http://localhost:5014/images/${team.image}`}
                className="card-img-top"
                alt={`Portret image. PNG. ${team.manufacturer}`}
            />
            <div className="card-body">
                <h5 className="cardHeader card-title">{team.manufacturer}</h5>
                <p className="card-text">
                    First driver: {team.driver1}
                    <br></br>
                    Second driver: {team.driver2}
                    <br></br>
                    Points: {team.points}
                </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Team ID: {team.id}</small>
            </div>
        </article>
    );
};

export default TeamCard;
