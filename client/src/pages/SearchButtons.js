import React from "react";
import './searchbuttons.css';
import SearchPic from './assets/searchPic.jpeg';
// import '../models';
import { Link, Route, useLocation } from 'react-router-dom';
import AcuteChestSyndrome from '../additionalinfo/acuteChestSyndrome'
import AvascularNecrosis from '../additionalinfo/avascularNecrosis';
import Priapism from '../additionalinfo/priapism';
import Retinopathy from '../additionalinfo/retinopathy';


function SearchButtons() {
  const location = useLocation();
  return (
    <div className="maincontainer">

      <div className="headline">

        <p>
          <h1>Search for Additional Health Info</h1>
          <h3>Please search on additional vital information</h3>
        </p>


      </div>
      <header class="innerheader">Search</header>
      <article>
        <div>
          <div className="buttons">
            <Link className={`list-group-item list-group-item-action ${location.pathname === "/SearchButtons/acuteChestSyndrome" ? "active" : ""}`} to="/SearchButtons/acuteChestSyndrome">Acute Chest Syndrome</Link>
            <Link className={`list-group-item list-group-item-action ${location.pathname === "/SearchButtons/avascularNecrosis" ? "active" : ""}`} to="/SearchButtons/avascularNecrosis">Avascular Necrosis</Link>
            <Link className={`list-group-item list-group-item-action ${location.pathname === "/SearchButtons/priapism" ? "active" : ""}`} to="/SearchButtons/priapism">Priapism</Link>
            <Link className={`list-group-item list-group-item-action ${location.pathname === "/SearchButtons/retinopathy" ? "active" : ""}`} to="/SearchButtons/retinopathy">Retinopathy</Link>
          </div>

          <div className="results">
            <Route exact path="/SearchButtons/acuteChestSyndrome" component={AcuteChestSyndrome} />
            <Route exact path="/SearchButtons/avascularNecrosis" component={AvascularNecrosis} />
            <Route exact path="/SearchButtons/priapism" component={Priapism} />
            <Route exact path="/SearchButtons/retinopathy" component={Retinopathy} />
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