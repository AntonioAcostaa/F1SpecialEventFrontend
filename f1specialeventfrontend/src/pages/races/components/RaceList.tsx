// RaceList.tsx
import React from "react";
import IRace from "../../../interfaces/IRace";
import format from "date-fns/format";

interface RaceListProps {
    races: IRace[];
}

const RaceList: React.FC<RaceListProps> = ({ races }) => {
    return (
        <div className="container ">
            {races.map((race) => (
                <div className="col-12 mx-auto text-center p-3 border-start shadow border-bottom border-2 rounded border-danger m-5">
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
                                <h3 className="card-title">{race.grandPrix}</h3>
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
