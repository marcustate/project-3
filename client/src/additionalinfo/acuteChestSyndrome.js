import React from "react";
import { Container, Row, Col } from "../components/Grid";
import "./acuteChestSyndrome.css";

function acuteChestSyndrome() {

    return (

        <Container fluid>
            <Row>
                <Col size="md-2">
                    {/* <div className="maincontainer">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-8 mt-4"> */}
                    <div className="main-column">Please, search for other diagnoses related to Sickle Cell Anemia.</div>
                    {/* </div>
                        </div>
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
                                    <td>Retinopathy</td>
                                    <td>A new Radiodensity on check radiograph accompanied by fever and/or respiratory symptoms</td>
                                    <td>Basic management will include prompt pain relief, incentive spirometry and treatment of bacterial or viral infection. Blood transfusion should be considered early in the hypoxic patient. A simple (top-up) transfusion may suffice in early or less severe disease but exchange transfusion will be necessary if there are features of clinical severity or a lack of response to simple transfusion.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default acuteChestSyndrome;