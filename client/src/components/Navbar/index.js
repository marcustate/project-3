import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <Link className="navbar-brand" to="/">Cell</Link>

                <div>
                    <ul className="navbar-nav">

                        <li className="nav-item">

                            <Link to="/home"
                                className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                            >
                                Home
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/generalInformation"
                                className={window.location.pathname === "/generalInformation" ? "nav-link active" : "nav-link"}
                            >
                                General Information
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/resourcesPage"
                                className={window.location.pathname === "/resourcesPage" ? "nav-link active" : "nav-link"}
                            >
                                Resources
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tracker"
                                className={window.location.pathname === "/tracker" ? "nav-link active" : "nav-link"}
                            >
                                Tracker
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/SearchButtons"
                                className={window.location.pathname === "/SearchButtons" ? "nav-link active" : "nav-link"}
                            >
                                SearchButtons
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/search"
                                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                            >
                                Search
                        </Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;