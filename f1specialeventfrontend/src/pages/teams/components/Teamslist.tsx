import ITeam from "../../../interfaces/ITeam";
import TeamCard from "./TeamCard";

const TeamList = ({ teams }: { teams: ITeam[] }) => {
    return (
        <section className="row">
            {teams &&
                teams.map((team) => {
                    return <TeamCard key={team.id} team={team} />;
                })}
        </section>
    );
};

export default TeamList;