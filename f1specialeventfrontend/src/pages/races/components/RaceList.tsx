// RaceList.tsx
import React from "react";
import IRace from "../../../interfaces/IRace";
import format from "date-fns/format";

interface RaceListProps {
    races: IRace[];
}

const RaceList: React.FC<RaceListProps> = ({ races }) => {
    return (
        <div className="container">
            <div className="test">
                <div className="row race-list-heade m-2 border-2">
                    <div className="col m-2">ID</div>
                    <div className="col m-2">Grand Prix</div>
                    <div className="col m-2">Winner</div>
                    <div className="col m-2">Winner Time</div>
                    <div className="col m-2">Number of Laps</div>
                </div>
                {races.map((race) => (
                    <div
                        key={race.id}
                        className="row race-list-item m-2 border-2 border shadow rounded "
                    >
                        <div className="col m-3">{race.id}</div>
                        <div className="col m-3">{race.grandPrix}</div>
                        <div className="col m-3">{race.winnerName}</div>
                        <div className="col m-3">
                            {format(new Date(race.winnerTime), "HH:mm:ss")}
                        </div>
                        <div className="col m-3">{race.numberOfLaps}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RaceList;
