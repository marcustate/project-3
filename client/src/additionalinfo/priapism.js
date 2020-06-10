import React from "react";
import { Container, Row, Col } from "../components/Grid";

function Priapism() {

    return (

        <Container fluid>
            <Row>
                <Col size="md-2">
                    {/* <div className="maincontainer">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4"> */}
                    <div className="main-column">Please, search for other diagnoses related to Sickle Cell Anemia.</div>
                    {/* </div>
            </div> */}
                </Col>

                <Col size="md-10">
                    <div className="table">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Diagnosis</th>
                                    <th scope="col">Definition</th>
                                    <th scope="col">Treatment</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Priapism</td>
                                    <td>A priapism attack is a sickle cell crisis that is localised to the penis. The sickled red blood cells cause a disruption to the normal flow of blood within the penis, causing the blood to get trapped and keeping the penis in the erect state.</td>
                                    <td>Helpful strategies for dealing with priapism include drinking water, taking painkillers, heat packs and the application of warm water to the penis. Exercise such as doing squats, jogging, cycling or running up and down stairs can resolve a priapism attack. Emptying the bladder during the night to avoid early morning erections has been reported as a beneficial preventative measure in some cases.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}
export default Priapism;