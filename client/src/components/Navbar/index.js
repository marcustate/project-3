import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">

                <ul className="navbar-nav">

                    <Link className="navbar-brand" to="/login"
                        className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"} >
                        <h5>Login</h5>
                    </Link>

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
                        <Link to="/tracker"
                            className={window.location.pathname === "/tracker" ? "nav-link active" : "nav-link"}>
                            <h5>Tracker</h5>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/healthInfo"
                            className={window.location.pathname === "/healthInfo" ? "nav-link active" : "nav-link"}>
                            <h5>Health Info</h5>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/resourcesPage"
                            className={window.location.pathname === "/resourcesPage" ? "nav-link active" : "nav-link"}>
                            <h5>Resources</h5>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;