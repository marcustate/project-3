import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Input } from "../components/Form";
import API from "../utils/trackerAPI";
import Exercise from "./assets/exercise.jpg";
import Journaling from "./assets/journaling.jpeg";
import Water from "./assets/water.jpeg";
import Graph from "./assets/graph.png";
import "./tracker.css";

function Goals() {

    const [goals, setGoals] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadGoals()
    }, [])

    function loadGoals() {
        API.getGoals()
            .then(res => setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    return (

        <Container fluid>
            <Row>
                <Col size="md-6">
                    {/* <div className="maincontainer">

                        <div className="headline">

                        </div> */}

                    <header class="innerheader">Wellness Track of Sickle Cell </header>

                    <article >
                        <div className="row">
                            <div className="col-10 mx-auto col-md-8 mt-4">
                                <h3 className="text-capitalize text Center">Please Track Your Health Statistics Below</h3>
                            </div>
                        </div>

                        <div className="cad card-body my-3">

                            <form>
                                <Input
                                    onChange={() => { }}
                                    name="wellnessInput"
                                    placeholder="Wellness input (required)"
                                />


                                {/* <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-dark text-black"></div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Wellness input (required)" />
                                </div> */}


                                <button type="submit" className="btn  btn-success  btn-lg mt-3 ">Add Item</button>
                            </form>
                            <div>
                                <ul className="list-group my-5">
                                    <h3 className="text-capitalize text-center">Tracked Items </h3>

                                    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                                        <h6>Wellness input added</h6>
                                    </li>
                                </ul>

                                <button type="button" className="btn btn-danger btn-large mt-3  text-capitalize " >Clear List</button>
                            </div>
                        </div>
                    </article>

                    <aside>
                        <div className="exercPic"><img src={Exercise} alt="Cause pic" width="200" height="200" /></div>
                        <div className="journPic"><img src={Journaling} alt="Cause pic" width="200" height="200" /></div>
                        <div className="waterPic"><img src={Water} alt="Cause pic" width="200" height="200" /></div>
                        <div className="graphPic" ><img src={Graph} alt="Cause pic" width="200" height="200" /></div>
                    </aside>
                    {/* </div> */}
                    
                </Col>
            </Row >
        </Container >
    )
}
export default Goals;