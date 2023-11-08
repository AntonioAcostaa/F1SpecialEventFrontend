import { Link } from "react-router-dom"

const Navigation = () => {      //Navigasjons-komponenten som skal benyttes på alle sider for å navigere mellom dem
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/races">Races</Link></li>
        </ul>
    );
};

export default Navigation;