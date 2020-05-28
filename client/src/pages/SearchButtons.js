import React from "react";
import './searchbuttons.css'
import SearchPic from './assets/searchPic.jpeg'


function SearchButtons() {
  return (
    <div className="maincontainer">

      <div className="headline">

        <p>
          <h1>Search for Additional Health Info</h1>
          <h3>Please search on additional vital information</h3>
        </p>


      </div>
      <header class="innerheader">Search </header>
      <article>
        <div>
          <div className="list-group">

            <button type="button" className="list-group-item list-group-item-action active">Acute Chest Syndrome</button>
            <button type="button" className="list-group-item list-group-item-action">AVasular Necrosis</button>
            <button type="button" className="list-group-item list-group-item-action">Priapism</button>
            <button type="button" className="list-group-item list-group-item-action" disabled>Retinopathy</button>
          </div>

        </div>
      </article>
      <aside>
        <div><p className="quest">There is a plethera of additional information on the world wide wed related to Sickle Cell Disease. Your doctor's and other health-care practitioners are great resources as well. Please always continue your quest for information that will help you live your best life.</p></div>
        <div className="searchPic" ><img src={SearchPic} alt="Cause pic" width="500" height="500" />

        </div>
      </aside>
      <footer></footer>
    </div>
  )
}


export default SearchButtons;