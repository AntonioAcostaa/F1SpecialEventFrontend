import ITeam from "../../../interfaces/ITeam";

const TeamCard = ({ team }: { team: ITeam }) => {
    return (
        <article className="card col-12 col-md-6 col-lg-4 align-content-center">
            <img
                src={`http://localhost:5014/images/${team.image}`}
                className="card-img-top"
                alt={`Portret image. PNG. ${team.manufacturer}`}
            />
            <div className="card-body">
                <h5 className="card-title">{team.manufacturer}</h5>
                <p className="card-text">
                    First driver: {team.driver1}
                    <br></br>
                    Second driver: {team.driver2}
                </p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Team ID: {team.id}</small>
            </div>
        </article>
    );
};

export default TeamCard;
