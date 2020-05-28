import React from "react";
import './home.css'
import Bones2 from './assets/bones2.jpeg'
import Eye from './assets/eye.jpeg'
import Gallblader from './assets/gallblader.jpeg'
import Heart from './assets/heart.png'
import Kidneys from './assets/kidneys.jpeg'
import Lungs from './assets/lungs.jpeg'



function Home() {
    return (



        <div className="maincontainer">

            <div className="headline">

                <p>
                    <h1>Knowledge Is Power</h1>
                    <h3>Please review the information below to gain more indepth knowledge of your disease. This information will provide greater insight on how to better managed your day to day life to ensure the healthiest outcome possible.</h3>
                </p>


            </div>


            <header>Organ Systems Involvement In Sickle Cell Anemia</header>
            <article>
                <div class="wrapper">
                    <header class="innerheader">Short And Long Term Impacts </header>
                    <div className="panel">
                        Liver/Gallbladder
                        <div className="picture"><img src={Gallblader} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[7]</h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Chronic passive congestion</li>
                                <li>Collagen-vascular disease</li>
                                <li>Common duct obstruction</li>
                                <li>Others</li>
                            </ul>
                        </div>

                    </div>
                    <div className="panel">Heart
                    <div className="picture"><img src={Heart} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[8] </h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Pulmonary Hypertension</li>
                                <li>Intravascular Hemolysis</li>
                                <li>Left ventricular diastolic dysfunction</li>
                                <li>Others</li>
                            </ul>
                        </div></div>
                    <div className="panel">Kidneys
                    <div className="picture"><img src={Kidneys} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[9]</h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Hemolysis</li>
                                <li>Vaso-Occlusion</li>
                                <li>Ischemia-reperfusion injury</li>
                                <li>Others</li>
                            </ul>
                        </div></div>
                    <div className="panel">Lungs
                    <div className="picture"><img src={Lungs} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[10]</h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Bacterial Pneumonias Prevalent</li>
                                <li>Acute Chest Syndrome></li>
                                <li>Restrictive Ventilatory Defect</li>
                                <li>Others</li>
                            </ul>
                        </div></div>
                    <div className="panel">Eyes
                    <div className="picture"><img src={Eye} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[11]</h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Non-Proliferative Sickle Cell Retinopathy</li>
                                <li>Proliferative Sickle Cell Retinopathy</li>
                                <li>Increased Pressure to Optic Nerve</li>
                                <li>Others</li>
                            </ul>
                        </div></div>
                    <div className="panel">Bones/Joints
                    <div className="picture"><img src={Bones2} alt="Cause pic" width="200" height="200" /></div>
                        <div className="title"><h3 className="impacts">Impacts[12]</h3></div>
                        <div ClassName="content">
                            <ul>
                                <li>Osteomyelitis</li>
                                <li>Avascular-Necrosis</li>
                                <li>Orbital Compression Syndrome</li>
                                <li>Others</li>
                            </ul>
                        </div></div>
                </div>

            </article>


            <aside>

                <h6 className="aside-title">How Can I Better Manage My Disease?</h6>
                <ul className="list-group">
                    <li className="list-item">Stay Hydrated</li>
                    <hr></hr>
                    <li className="list-item">Learn My Triggers for Pain Crises</li>
                    <hr></hr>
                    <li className="list-item">Eat a Well Balanced Diet</li>
                    <hr></hr>
                    <li className="list-item">Prevent Infections with Good Hygiene</li>
                    <hr></hr>
                    <li className="list-item">Understand Your Norms and what they mean for you</li>
                    <hr></hr>
                    <li className="list-item">Surround Yourself With a Strong Support System</li>
                </ul>
                <div className="tracker-link">
                    <h5>Manage by Keeping Track</h5>
                    <p >Please use the link below to track your health stats and journal about your daily health condition. This will provide you with insights to live a healthy and happy life.</p>
                    <button type="button" class="tracker-button">Track Info</button> </div>


            </aside>





            <footer>Sickle Cell Tracker App</footer>

        </div>

    )
}
export default Home;
