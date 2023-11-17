import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActivePageContext } from "../contexts/ActivePageContext";
import IActivePageContext from "../interfaces/IActivePageContext";
import { ActivePage } from "../interfaces/IActivePageContext";
import "../assets/fonts/fonts.css";

//Navigasjons-komponenten som skal benyttes på alle sider for å navigere mellom dem
const Navigation = () => {
    const { activePage, setActivePage } = useContext(
        ActivePageContext
    ) as IActivePageContext;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex slign-items-center">
                <img
                    className="navbar-brand"
                    src="/src/assets/images/f1-logo.png"
                    alt="page-header-image. PNG"
                    style={{ width: "80px", margin: "2px 0 0 0" }}
                ></img>
                <p
                    className="navbar-brand"
                    style={{
                        margin: "0 10px 0 0",
                        padding: 0,
                        fontStyle: "italic",
                    }}
                ></p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === ActivePage.home
                                        ? "navtext nav-link border-danger border-top border-end border-2 rounded m-2"
                                        : "navtext nav-link border-secondary border-top border-end border-2 rounded m-2"
                                }
                                to="/"
                                onClick={() => setActivePage(ActivePage.home)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === ActivePage.drivers
                                        ? "navtext nav-link border-danger border-top border-end border-2 rounded m-2"
                                        : "navtext nav-link border-secondary border-top border-end border-2 rounded m-2"
                                }
                                to="/drivers"
                                onClick={() =>
                                    setActivePage(ActivePage.drivers)
                                }
                            >
                                Drivers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === ActivePage.teams
                                        ? "navtext nav-link border-danger border-top border-end border-2 rounded m-2"
                                        : "navtext nav-link border-secondary border-top border-end border-2 rounded m-2"
                                }
                                to="/teams"
                                onClick={() => setActivePage(ActivePage.teams)}
                            >
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === ActivePage.races
                                        ? "navtext nav-link border-danger border-top border-end border-2 rounded m-2"
                                        : "navtext nav-link border-secondary border-top border-end border-2 rounded m-2"
                                }
                                to="/races"
                                onClick={() => setActivePage(ActivePage.races)}
                            >
                                Races
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
