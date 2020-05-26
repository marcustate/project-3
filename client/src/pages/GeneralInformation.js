import React from "react";
import './generalInformation.css'

function GeneralInformation() {
    return (
        <div className="maincontainer">
            <header>Understanding Sickle Cell Anemia</header>
            <article>
                <h3>What It Is</h3>
                <p>Sickle Cell Anemias is an inherited red blood cell disorder "caused by a mutation in teh Hemoglobin-Beta Gebe found on Chromose 11[4]". In normal individuals red blood cells are smooth and shaped somewhat like a donut without a hole in the middle. This makes them bendable so that they will easily pass through blood vessels to carry oxygen throughout the body. In sickle cell disease some red blood cells can for into sickle or crescent shapes. This makes them sticky and sharp and results in them getting stuck in blood vessel walls. [1] </p>
                <h3>Who Has Sickle Cell Anemia</h3>
                <p>Scientists have tracked the origin of the disease to a genetic mutation that occurred over 7,300 years ago in the Green Sahara. This mutation  came with an important advantage for people of that region in that one affected chormose can protect its carrier against malaria[5]. This disease is thus more common in certain ethnic groups: </p>
                <ul>
                    <li>People of African descent,including African-Americans[2]</li>
                    <li>Hispanic-Americans from Central and South America[2]</li>
                    <li>Peopleof Middle Easter, Asian, Indian and Medieterranean Descent[2]</li>
                    <li>It can also present in Greeks, Sicillians,French Corsicans and other nationalities[3]</li>
                </ul>
                <h3>Signs and Symptoms</h3>
                <p>"Screening for Sickle Cell at birth is currently mandatory in the United States. For the first 6 months of life, infants are protected largely by elevated levels of fetal hemoglobing. Sickle cell disease usually manifests eary in childhood, the condition becomese evident as follows.[6]</p>
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
                            <td> The most common clinical manifestation of SCD is vaso-occlusive crisis; pain crises are the most distinguishing clinical feature of SCD</td>

                        </tr>
                        <tr>

                            <td>Bone Pain</td>
                            <td> Often seen in long bones of extremities primarly due to bone marrow infarction</td>

                        </tr>
                        <tr>

                            <td >Anemia</td>
                            <td>Universally present, chronic, and hemolytic in nature</td>
                        </tr>
                        <tr>

                            <td >Infection</td>
                            <td>Organisms that pose the greatest danger include encapsulated respiratory bacteria, particularly Streptococcus pneumonia; adult infections are predominately with gram-negative organisms, especially Salmonella</td>
                        </tr>





                    </tbody>
                </table>
            </article>


            <aside>
                <h6 className="title">How Can I Better Manage My Disease?</h6>
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
                    <button type="button" class="tracker-button">Track Info</button>
                </div>


            </aside>





            <footer>Sickle Cell Tracker App</footer>




        </div>

    )
}
export default GeneralInformation;