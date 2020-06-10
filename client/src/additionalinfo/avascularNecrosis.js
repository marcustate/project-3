import React from "react";
import { Container, Row, Col } from "../components/Grid";

function AvascularNecrosis() {

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
                                    <td>Avascular Necrosis</td>
                                    <td>The death of bone tissue due to a lack of blood supply.</td>
                                    <td>There are several treatments that can help to relieve pain. Physical therapy and exercises may be recommended. In severe cases, surgery may be recommended.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
                </Col>
            </Row>
        </Container >
    );
}
export default AvascularNecrosis;