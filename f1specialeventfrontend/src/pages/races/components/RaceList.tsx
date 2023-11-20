// RaceList.tsx
import React from "react";
import IRace from "../../../interfaces/IRace";
import format from "date-fns/format";
import styles from "../styles/raceList.module.css";
import "../../../assets/fonts/fonts.css";

interface RaceListProps {
    races: IRace[];
}

const RaceList: React.FC<RaceListProps> = ({ races }) => {
    return (
        <div className="container ">
            {races.map((race) => (
                <div
                    className={`${styles.cardContainer} border-3 rounded shadow border-bottom border-danger mx-auto text-center p-3  m-5`}
                    key={race.id}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`http://localhost:5014/images/${race.image}`}
                                className="rounded w-100 h-100 shadow"
                                alt={`Track image. PNG. ${race.grandPrix}`}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="cardHeader card-title p-3">
                                    {race.grandPrix}
                                </h3>
                                <br />
                                <br />
                                <h5 className="card-text">Winner:</h5>
                                <p className="card-text">{race.winnerName}</p>
                                <h5 className="card-text">Time:</h5>
                                <p className="card-text">
                                    {format(
                                        new Date(race.winnerTime),
                                        "HH:mm:ss"
                                    )}
                                </p>
                                <br />
                                <p className="card-text">
                                    <small className="id-text">
                                        ID: {race.id}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RaceList;
