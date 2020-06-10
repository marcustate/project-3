import React from 'react';
import { Container, Row, Col } from "../components/Grid";

function retinopathy() {

    return (

        <Container fluid>
            <Row>
                
                <Col size="md-2">
                    <div className="main-column">Please, search for other diagnoses related to Sickle Cell Anemia.</div>
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
                                    <td>PSR/NPR</td>
                                    <td>Retinal vascular disease, or damage to the retina caused by abnormal blood flow.</td>
                                    <td>The goal of therapy for NPSR/PSR is to prevent development of ischemia, infarction and the dreaded complication of neovascularization. Complete ophthalmic examination twice a year is recommended for sickle cell patients (SC,SS, S-thal, etc). Baseline fluorescein angiography may be performed to examine blood flow in the retina and choroid.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
                </Col>
            </Row>
        </Container>
    );
}
export default retinopathy;