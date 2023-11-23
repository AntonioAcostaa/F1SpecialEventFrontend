import '/src/assets/fonts/fonts.css';
import { useContext, useEffect } from 'react';
import { TeamContext } from '../../../contexts/TeamContext';
import ITeamContext from '../../../interfaces/ITeamContext';

const ConstructorsList = () => {
    useEffect(() => {
        getAllTeams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { teams, getAllTeams } = useContext(TeamContext) as ITeamContext;

    const teamsSortedByPoints = teams.sort((a, b) => b.points - a.points);

    return (
        <section className='header col text-center'>
            <h3 className='text-decoration-underline'>Constructors</h3>
            <div style={{maxHeight: "460px", overflow: "scroll"}} className='rounded border-top border-5 border-danger border-end mb-1 mt-3'>
                <table className='table'>
                    <thead>
                        <tr className='table-secondary'>
                            <th scope='col'>ID</th>
                            <th scope='col'>Team</th>
                            <th scope='col'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamsSortedByPoints.map((team) => (
                                <tr key={team.id}>
                                    <th scope="row">{team.id}</th>
                                    <td>{team.manufacturer}</td>
                                    <td>{team.points}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ConstructorsList;
