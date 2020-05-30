import React from "react";
//import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <div className="text-capitalize text-center">Tracked Items
            <div className="list-overflow-container">
                <ul className="list-group my-5">{children}</ul>
            </div>
        </div>
    );
}

export function ListItem({ children }) {
    return (
        <div>
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">{children}
                <h6>Wellness input added</h6>
            </li>
        </div>
    );
}

