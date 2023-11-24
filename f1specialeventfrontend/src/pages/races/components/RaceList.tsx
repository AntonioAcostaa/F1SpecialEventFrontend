import IRace from "../../../interfaces/IRace";
import "../../../assets/fonts/fonts.css";
import RaceCard from "./RaceCard";

const RaceList = ({races} : {races: IRace[]}) => {
    return (
        <section className="container ">
            {races && races.map((race) => (
                <RaceCard key={race.id} race={race} />
            ))}
        </section>
    );
};

export default RaceList;
