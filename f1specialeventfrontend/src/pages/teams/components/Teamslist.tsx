import ITeam from "../../../interfaces/ITeam";
import TeamCard from "./TeamCard";

const TeamList = ({ teams }: { teams: ITeam[] }) => {
    return (
        <section className="row gap-1">
            {teams && teams.map((team) => (
                <TeamCard key={team.id} team={team} />
            ))}
        </section>
    );
};

export default TeamList;
