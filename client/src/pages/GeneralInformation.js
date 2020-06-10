import React from "react";
import { Container, Row, Col } from "../components/Grid";
//import { Link, Route, useLocation } from 'react-router-dom';
//import Tracker from "../pages/Tracker";
import "./generalInformation.css";
import Bones2 from "./assets/bones2.jpeg";
import Eye from "./assets/eye.jpeg";
import Gallblader from "./assets/gallblader.jpeg";
import Heart from "./assets/heart.png";
import Kidneys from "./assets/kidneys.jpeg";
import Lungs from "./assets/lungs.jpeg";

function GeneralInformation() {

    // const location = useLocation();
    return (
        <Container fluid>
            <Row>
                {/* <div className="maincontainer"> */}

                <Col size="md-12">
                    {/* <Jumbotron> */}
                    {/* <p> */}
                    <div className="headline">
                        <h2>Knowledge Is Power</h2>
                        {/* </div> */}
                        <h4>Please, review the information below and gain more indepth knowledge of your disease.</h4>
                        <h4>This information will provide greater insight on how to better manage your day-to-day life and to ensure the healthiest outcome possible.</h4>
                        {/* </p> */}
                    </div>
                    {/* </Jumbotron> */}
                    {/* </div> */}
                </Col>

                <Col size="md-12">
                    <header>Organ Systems Involvement In Sickle Cell Anemia</header>
                </Col>

                <Col size="md-8">
                    <article>
                        <div className="wrapper">

                            <header className="innerheader">Short And Long Term Impacts</header>

                            <div className="panel"><h4>Liver/Gallbladder</h4>
                                <div className="picture">
                                    <img src={Gallblader} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[7]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Chronic passive congestion</li>
                                    <li>Collagen-vascular disease</li>
                                    <li>Common duct obstruction</li>
                                    <li>Others</li>
                                </ul>
                                {/* </div> */}
                            </div>

                            <div className="panel"><h4>Heart</h4>
                                <div className="picture">
                                    <img src={Heart} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[8]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Pulmonary Hypertension</li>
                                    <li>Intravascular Hemolysis</li>
                                    <li>Left ventricular diastolic dysfunction</li>
                                    <li>Others</li>
                                </ul>
                            </div>

                            <div className="panel"><h4>Kidneys</h4>
                                <div className="picture">
                                    <img src={Kidneys} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[9]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Hemolysis</li>
                                    <li>Vaso-Occlusion</li>
                                    <li>Ischemia-reperfusion injury</li>
                                    <li>Others</li>
                                </ul>
                            </div>

                            <div className="panel"><h4>Lungs</h4>
                                <div className="picture">
                                    <img src={Lungs} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[10]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Bacterial Pneumonias Prevalent</li>
                                    <li>Acute Chest Syndrome</li>
                                    <li>Restrictive Ventilatory Defect</li>
                                    <li>Others</li>
                                </ul>
                            </div>

                            <div className="panel"><h4>Eyes</h4>
                                <div className="picture">
                                    <img src={Eye} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[11]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Non-Proliferative Sickle Cell Retinopathy</li>
                                    <li>Proliferative Sickle Cell Retinopathy</li>
                                    <li>Increased Pressure to Optic Nerve</li>
                                    <li>Others</li>
                                </ul>
                            </div>

                            <div className="panel"><h4>Bones/Joints</h4>
                                <div className="picture">
                                    <img src={Bones2} alt="Cause pic" width="200" height="200"></img>
                                </div>
                                <div className="impacts">Impacts[12]</div>
                                {/* <div ClassName="content"> */}
                                <ul>
                                    <li>Osteomyelitis</li>
                                    <li>Avascular-Necrosis</li>
                                    <li>Orbital Compression Syndrome</li>
                                    <li>Others</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </Col>

                <Col size="md-4">
                    <article>
                        <header className="aside-title">How Can I Better Manage My Disease?</header>
                        <ul className="list-group">
                            <li>Stay Hydrated</li>
                            <li>Learn My Triggers for Pain Crises</li>
                            <li>Eat a Well Balanced Diet</li>
                            <li>Prevent Infections with Good Hygiene</li>
                            <li>Understand Your Norms and what they mean for you</li>
                            <li>Surround Yourself With a Strong Support System</li>
                        </ul>

                        <div className="tracker-link">
                            <div className="subtitle">Manage by Keeping Track</div>
                            <div className="trackInfo">
                                <p>Please use the link below to track your health stats and journal about your daily health condition. This will provide you with insights to live a healthy and happy life.</p>
                            </div>
                            <button type="button" class="tracker-button">Track Info</button>
                            {/* <div className="buttonTrack">
                                <Link className={`tracker-button ${location.pathname === "/tracker" ? "active" : ""}`} to="/tracker">Track Info</Link>
                            </div>

                            <div className="buttonResult">
                            <Route exact path="/tracker" component={Tracker} />
                            </div> */}
                        </div>
                    </article>
                </Col>
            </Row >
        </Container >
    )
}
export default GeneralInformation;
