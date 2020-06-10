import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Input } from "../components/Form";
import { List, ListItem } from "../components/List";
import { SubmitBtn, ClearBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import trackerAPI from "../utils/trackerAPI";
import Exercise from "./assets/exercise.jpg";
import Journaling from "./assets/journaling.jpeg";
import Water from "./assets/water.jpeg";
import Graph from "./assets/graph.png";
import "./tracker.css";

function Goals() {

    const [goals, setGoals] = useState([])
    const [wellnessInput, setWellnessInput] = useState("")

    useEffect(() => {
        loadGoals()
    }, [])

    function loadGoals() {
        trackerAPI.getGoals()
            .then(res => setGoals(res.data)
            )
            .catch(err => console.log(err));
    };

    function addGoal(event) {
        const { name, value } = event.target;
        setWellnessInput({ ...wellnessInput, [name]: value })
    };

    function handleAddGoal(event) {
        event.preventDefault();
        trackerAPI.saveGoal(wellnessInput)
            .then(res => { document.querySelector("#name1").value = ""; loadGoals() })
            .catch(err => console.log(err));
    };

    function deleteGoal(id) {
        trackerAPI.deleteGoal(id)
            .then(res => loadGoals())
            .catch(err => console.log(err));
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h3>Wellness Track of Sickle Cell</h3>
                    </Jumbotron>

                    <article>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-8 mt-4">
                                <h4 className="text-capitalize text-center">Enter Your Daily Goals</h4>
                            </div>
                        </div>

                        <div className="cad card-body my-3">

                            <div>
                                <Input
                                    id="name1"
                                    onChange={addGoal}
                                    name="wellnessInput"
                                    placeholder="Wellness input (required)"
                                />
                                <SubmitBtn onClick={handleAddGoal}></SubmitBtn>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="pictures">
                                <div className="exercPic"><img src={Exercise} alt="Cause pic" width="110" height="110" /></div>
                                <div className="journPic"><img src={Journaling} alt="Cause pic" width="110" height="110" /></div>
                                <div className="waterPic"><img src={Water} alt="Cause pic" width="110" height="110" /></div>
                                <div className="graphPic" ><img src={Graph} alt="Cause pic" width="110" height="110" /></div>
                            </div>
                        </div>

                    </article>
                </Col>

                <Col size="md-6">
                    <Jumbotron>
                        <h3>Tracked Goals</h3>
                    </Jumbotron>
                    <article>
                        {goals.length ? (
                            <List>
                                {goals.map(goal => {
                                    return (
                                        <ListItem key={goal._id}>
                                            {goal.wellnessInput}
                                            <ClearBtn onClick={() => deleteGoal(goal._id)} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                                <h4>No Results to Display</h4>
                            )}
                    </article>
                </Col>
            </Row >
        </Container >
    )
}
export default Goals;