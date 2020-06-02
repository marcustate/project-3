import React from "react";

export function SubmitBtn(props) {
    return (

        <button {...props} className="btn btn-success mt-3">Add Goal
            {props.children}
        </button>
    );
}

export function ClearBtn(props) {
    return (
        <button {...props} className="btn btn-danger text-capitalize">Delete
            {props.children}
        </button>
    );
}
