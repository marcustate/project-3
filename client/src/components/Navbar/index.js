import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">

                <Link className="navbar-brand" to="/register">Cell</Link>

                <div>
                    <ul className="navbar-nav">

                        <li className="nav-item">

                            <Link to="/home"
                                className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                                <h5>Home</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/generalInformation"
                                className={window.location.pathname === "/generalInformation" ? "nav-link active" : "nav-link"}>
                                <h5>General Information</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/resourcesPage"
                                className={window.location.pathname === "/resourcesPage" ? "nav-link active" : "nav-link"}>
                                <h5>Resources</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tracker"
                                className={window.location.pathname === "/tracker" ? "nav-link active" : "nav-link"}>
                                <h5>Tracker</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/SearchButtons"
                                className={window.location.pathname === "/SearchButtons" ? "nav-link active" : "nav-link"}>
                                <h5>SearchButtons</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/search"
                                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                                <h5>Search</h5>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;