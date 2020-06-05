import React from 'react';
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API"
import "./wellnessTracker.css";


function Goals() {
    // const [goals, setGoals] = useState([])
    // const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadGoals()
    // }, [])

    // function loadGoals() {
    //     API.getGoals()
    //     .then(res => setGoals(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h3 className="text-capitalize text Center">Wellness track of Sickle Cell</h3>
                    </Jumbotron>

                    {/* <div className="maincontainer">
                        <div className="row"> */}
                            {/* <div className="col-10 mx-auto col-md-8 mt-4">

                            </div> */}
                        {/* </div> */}

                        <div className="cad card-body my-3">
                            <form>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-dark text-black">
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Wellness input (required)" />
                                </div>
                                <button type="submit" className="btn  btn-success  btn-lg mt-3 ">Add Item</button>
                            </form>
                            <div>
                                <ul className="list-group my-5">
                                    <h3 className="text-capitalize text-center">Goals</h3>
                                    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                                        <h6>Wellness input added</h6>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-danger btn-large mt-3  text-capitalize " >Clear List</button>
                            </div>
                        </div>
                    {/* </div> */}
                </Col>
            </Row>
        </Container >
    )
}
export default Goals;