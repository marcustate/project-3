import React from "react";
import './healthInfo.css';
import SearchPic from "./assets/searchPic.jpeg";
import { Container, Row, Col } from "../components/Grid";
// import '../models';
import { Link, Route, useLocation } from "react-router-dom";
import AcuteChestSyndrome from "../additionalinfo/acuteChestSyndrome";
import AvascularNecrosis from "../additionalinfo/avascularNecrosis";
import Priapism from "../additionalinfo/priapism";
import Retinopathy from "../additionalinfo/retinopathy";

function HealthInfo() {

  const location = useLocation();

  return (

    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* <div className="maincontainer">

            <div className="headline">
              <span> */}
          <div className="headline">
            <h2>Search for Additional Health Info</h2>
            <h4>Please, search on additional vital information.</h4>
            {/* </span>
            </div> */}
          </div>
        </Col>

        <Col size="md-12">
          <header>Search</header>
        </Col>

        <Col size="md-8">
          <article>
            <div>
              <div className="buttons">
                <Link className={`list-group-item list-group-item-action ${location.pathname === "/healthInfo/acuteChestSyndrome" ? "active" : ""}`} to="/healthInfo/acuteChestSyndrome">Acute Chest Syndrome</Link>
                <Link className={`list-group-item list-group-item-action ${location.pathname === "/healthInfo/avascularNecrosis" ? "active" : ""}`} to="/healthInfo/avascularNecrosis">Avascular Necrosis</Link>
                <Link className={`list-group-item list-group-item-action ${location.pathname === "/healthInfo/priapism" ? "active" : ""}`} to="/healthInfo/priapism">Priapism</Link>
                <Link className={`list-group-item list-group-item-action ${location.pathname === "/healthInfo/retinopathy" ? "active" : ""}`} to="/healthInfo/retinopathy">Retinopathy</Link>
              </div>

              <div className="results">
                <Route exact path="/healthInfo/acuteChestSyndrome" component={AcuteChestSyndrome} />
                <Route exact path="/healthInfo/avascularNecrosis" component={AvascularNecrosis} />
                <Route exact path="/healthInfo/priapism" component={Priapism} />
                <Route exact path="/healthInfo/retinopathy" component={Retinopathy} />
              </div>
            </div>
          </article>
        </Col>

        <Col size="md-4">
          <aside>
            <div className="quest">There is a plethora of additional information on the worldwide web related to Sickle Cell Disease. Your doctors and other health-care practitioners are great resources as well.<br></br>Please, always continue your quest for information that will help you live your best life.</div>
            <div className="searchPic" ><img src={SearchPic} alt="Cause pic" width="300" height="300" /></div>
          </aside>
        </Col>

      </Row >
    </Container >
  );
}

export default HealthInfo;