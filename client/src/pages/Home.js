import React from "react";
import './home.css'
import Causes from './assets/causes.jpg'
import Risk from './assets/risk.jpg'
import Symptoms from './assets/symptoms.jpg'
import Treatment from './assets/treatment.jpg'
import Maintenance from './assets/maintenance.jpg'
import Testing from './assets/testing.jpg'

function Home() {
    return (
        <div className="maincontainer">

            <div className="intro">
                <h1>My Sickle Cell Tracker App</h1>
                <h3>Welcome! We wanted to create a place where you can learn about your disease and learn about some of the things you can do to stay healthy. Sickle Cell is a challenging disease for many people but with education, discipline and understanding it can be well managed and you can live a fulfilled happy productive life. Let’s check out some of the resources below to learn a little more about our disease.</h3>
            </div>



            <div className="container">

                <div className="card">
                    <div className="picture"><img src={Causes} alt="Cause pic" width="200" height="200" /></div>
                    <div className="title"><h3>Causes</h3></div>
                    <div ClassName="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>




                <div className="card">
                    <div className="picture"> <img src={Symptoms} alt="Cause pic" width="200" height="200" /></div>
                    <div clasName="title"><h3>Causes</h3></div>
                    <div className="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>


                <div className="card">
                    <div className="picture">
                        <img src={Treatment} alt="Cause pic" width="200" height="200" /></div>
                    <div className="title"><h3>Treatment</h3></div>
                    <div className="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>


                <div className="card">
                    <div className="picture">
                        <img src={Risk} alt="Cause pic" width="200" height="200" /></div>
                    <div className="Title"><h3>Risk</h3></div>
                    <div className="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>

                <div className="card">
                    <div className="picture">
                        <img src={Maintenance} alt="Cause pic" width="200" height="200" /></div>
                    <div><h3>Maintenance</h3></div>
                    <div className="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>
                <div className="card">
                    <div className="picture">
                        <img src={Testing} alt="Cause pic" width="200" height="200" /></div>
                    <div><h3>Testing</h3></div>
                    <div className="content">
                        <p>Sickle Cell Anemia causes many harmful symptoms in patients that have it. “Pain associated with blocked blood vessels is the most obvious symptom, and can be sever enough to warrant hospitalization. The blocked blood vessels frequently lead to spleen, lung, and heart damage and stroke. Sickle Cell also causes anemia which leads to fatigue”</p></div>
                </div>
            </div >
        </div>

    )
}
export default Home;