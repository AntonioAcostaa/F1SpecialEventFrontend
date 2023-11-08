import { useState } from 'react';
import RacesService from '../../services/RacesService';
import IRace from '../../interfaces/IRace';
import format from 'date-fns/format';

const RacesPage = () => {
    const [races, setRaces] = useState<IRace[]>([]);

    const getAllRaces = () => {
        RacesService.getAllRaces()
            .then((response) => {
                setRaces(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='container'>
            <h3>Races</h3>
            <button onClick={getAllRaces}>Get all races</button>
            {races.length !== 0 &&
                races.map((race) => {
                    return (
                        <div key={race.id}>
                            {race.id} {race.grandPrix} {race.winnerName} Time: {format(new Date(race.winnerTime), 'HH:mm:ss')} Laps: {race.numberOfLaps}
                        </div>
                    );
                })}
        </div>
    );
};

export default RacesPage;
