import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext from "../../interfaces/IActivePageContext";
import { ActivePage } from "../../interfaces/IActivePageContext";
import "../../assets/fonts/fonts.css";

const Navigation = () => {
    const { activePage, setActivePage } = useContext(
        ActivePageContext
    ) as IActivePageContext;

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-danger border-2"
            style={{ position: "sticky", top: "0", zIndex: "999" }}
        >
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
                                style={{ fontSize: 14 }}
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
                                style={{ fontSize: 14 }}
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
                                style={{ fontSize: 14 }}
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
                                style={{ fontSize: 14 }}
                            >
                                Races
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === ActivePage.quiz
                                        ? "navtext nav-link border-danger border-top border-end border-2 rounded m-2"
                                        : "navtext nav-link border-secondary border-top border-end border-2 rounded m-2"
                                }
                                to="/quiz"
                                onClick={() => setActivePage(ActivePage.quiz)}
                                style={{ fontSize: 14 }}
                            >
                                Quiz
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
