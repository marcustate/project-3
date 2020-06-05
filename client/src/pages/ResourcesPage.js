import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Col, Row } from "../components/Grid";
import './resourcespage.css';

function ResourcesPage() {
    return (

        <Container fluid>
            <Row>
                <Col size="md-9">
                    <Jumbotron>
                        <h3>List of References</h3>
                    </Jumbotron>
                </Col>

                <Col size="md-9">
                    <article>
                        <ol className="list-references">
                            <li>https://sicklecellspeaks.com/understanding-sickle-cell/what-is-sickle-cell/</li>
                            <br />
                            <li>https://www.hematology.org/education/patients/anemia/sickle-cell-disease</li>
                            <br />
                            <li>https://www.sicklecellnewjersey.org/about-scanj/history-of-sickle-cell/</li>
                            <br />
                            <li>https://www.genome.gov/Genetic-Disorders/Sickle-Cell-Disease</li>
                            <br />
                            <li>https://www.iflscience.com/health-and-medicine/scientists-have-pinpointed-the-origin-of-sickle-cell-anaemia-to-one-mutation-259-generations-ago/</li>
                            <br />
                            <li>https://emedicine.medscape.com/article/205926-overview#a1</li>
                            <br />
                            <li>https://pubmed.ncbi.nlm.nih.gov/4033412/</li>
                            <br />
                            <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3881188/</li>
                            <br />
                            <li>https://emedicine.medscape.com/article/1957952-overview</li>
                            <br />
                            <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2552608/</li>
                            <br />
                            <li>https://sicklecellanemianews.com/sickle-cell-anemia-and-the-eyes/</li>
                        </ol>
                    </article>
                </Col>
            </Row>
        </Container>
    )
}

export default ResourcesPage;