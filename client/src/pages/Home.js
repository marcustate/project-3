import React from "react";
import "./home.css";
import { Container, Row, Col } from "../components/Grid";

function Home() {

    return (

        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div className="headline">
                        <h2>My Sickle Cell Tracker</h2>
                        <h4>Welcome! We wanted to create a place where you can learn about your disease and some of the things you can do to stay healthy.<br></br>Sickle Cell is a challenging disease for many people but it can be well managed so you can live a fulfilled and productive life with education, discipline and understanding. Let’s check out some of the resources below to learn a little more about our disease.</h4>
                    </div>
                </Col>

                <Col size="md-12">
                    <header>Understanding Sickle Cell Anemia</header>
                </Col>

                <Col size="md-8">
                    <article>
                        <div className="subtitle-home">What It Is</div>
                        <div className="answer-home">Sickle Cell Anemia is an inherited red blood cell disorder "caused by a mutation in the Hemoglobin-Beta Gene found on Chromose 11[4]". In normal individuals red blood cells are smooth and shaped somewhat like a donut without a hole in the middle. This makes them bendable so that they will easily pass through blood vessels to carry oxygen throughout the body. In sickle cell disease some red blood cells can form into sickle or crescent shapes. This makes them sticky and sharp and results in them getting stuck in blood vessel walls. [1]</div>

                        <div className="subtitle-home">Who Has Sickle Cell Anemia</div>
                        <div className="answer-home">Scientists have tracked the origin of the disease to a genetic mutation that occurred over 7,300 years ago in the Green Sahara. This mutation  came with an important advantage for people of that region in that one affected chormose can protect its carrier against malaria[5]. This disease is thus more common in certain ethnic groups:</div>
                        
                        <div className="group-people">
                            <ul>
                                <li>People of African descent, including African-Americans[2]</li>
                                <li>Hispanic-Americans from Central and South America[2]</li>
                                <li>People of Middle East, Asian, Indian and Mediterranean Descent[2]</li>
                                <li>It can also be present in Greeks, Sicilians, French Corsicans and other nationalities[3]</li>
                            </ul>
                        </div>

                        <div className="subtitle-home">Signs and Symptoms</div>
                        <div className="answer-home">"Screening for Sickle Cell at birth is currently mandatory in the United States. For the first 6 months of life, infants are protected largely by elevated levels of fetal hemoglobing. Sickle cell disease usually manifests eary in childhood, the condition becomese evident as follows.[6]</div>

                        <div className="table-home">
                            <table className="table table-sm table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Symptom</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Acute And Chronic Pain</td>
                                        <td>The most common clinical manifestation of SCD is vaso-occlusive crisis; pain crises are the most distinguishing clinical feature of SCD</td>
                                    </tr>

                                    <tr>
                                        <td>Bone Pain</td>
                                        <td>Often seen in long bones of extremities primarly due to bone marrow infarction</td>
                                    </tr>

                                    <tr>
                                        <td>Anemia</td>
                                        <td>Universally present, chronic, and hemolytic in nature</td>
                                    </tr>

                                    <tr>
                                        <td>Infection</td>
                                        <td>Organisms that pose the greatest danger include encapsulated respiratory bacteria, particularly Streptococcus pneumonia; adult infections are predominately with gram-negative organisms, especially Salmonella</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </Col>

                <Col size="md-4">
                    <aside>
                        <div>
                            <div className="overview">TedEd Overview of Sickle Cell Anemia</div>
                        </div>

                        <div className="video">
                            <iframe title="sickleCellVideo" width="560" height="315" src="https://www.youtube.com/embed/hRnrIpUMyZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </aside>
                </Col >
            </Row >
        </Container >
    );
}
export default Home;