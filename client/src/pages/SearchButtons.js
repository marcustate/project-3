import React from "react";



function SearchButtons() {
  return (
    <div>
      <div className="list-group">

        <button type="button" className="list-group-item list-group-item-action active">Acute Chest Syndrome</button>
        <button type="button" className="list-group-item list-group-item-action">AVasular Necrosis</button>
        <button type="button" className="list-group-item list-group-item-action">Priapism</button>
        <button type="button" className="list-group-item list-group-item-action" disabled>Retinopathy</button>
      </div>

    </div>
  )
}


export default SearchButtons;