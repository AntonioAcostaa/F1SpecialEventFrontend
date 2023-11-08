import TeamsService from "../services/TeamsService";

const HomePage = () => {
    console.log(TeamsService.getAllTeams())
    return (
        <div>
            <h1>Home</h1>

        </div>
    );
}

export default HomePage;