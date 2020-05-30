import React from "react";

// This file exports the Input

export function Input(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text bg-dark text-black"></div>
      </div>
      <input type="text" className="form-control" placeholder="Wellness input (required)" {...props } />
    </div>
  );
}
