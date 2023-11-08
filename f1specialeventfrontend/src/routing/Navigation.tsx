import { Link } from "react-router-dom"

//Navigasjons-komponenten som skal benyttes på alle sider for å navigere mellom dem
const Navigation = () => {      
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex slign-items-center" >
                <img className="navbar-brand" src="/src/assets/images/f1-logo.png" alt="page-header-image. PNG" style={{width: "80px", margin: "2px 0 0 0"}}></img>
                <p className="navbar-brand" style={{margin: "0 10px 0 0", padding: 0, fontStyle: "italic"}}>Special Event</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/drivers">Drivers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/teams">Teams</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/races">Races</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navigation;