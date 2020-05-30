import React from "react";

export function SubmitBtn(props) {
    return (

        <button {...props} className="btn  btn-success  btn-lg mt-3">
            {props.children}
        </button>
    );
}

export function ClearBtn(props) {
    return (
        <button {...props} className="btn btn-danger btn-large mt-3  text-capitalize">Clear List
            {props.children}
        </button>
    );
}
