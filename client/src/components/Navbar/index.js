import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">

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
                        <Link to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Search
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;