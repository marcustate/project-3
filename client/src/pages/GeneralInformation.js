import React from "react";
import './generalInformation.css'

function GeneralInformation() {
    return (
        <div className="maincontainer">


            <div className="headline">

                <p>
                    <h1>My Sickle Cell Tracker</h1>
                    <h3>Welcome! We wanted to create a place where you can learn about your disease and learn about some of the things you can do to stay healthy. Sickle Cell is a challenging disease for many people but with education, discipline and understanding it can be well managed and you can live a fulfilled happy productive life. Let’s check out some of the resources below to learn a little more about our disease.</h3>
                </p>


            </div>
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



                <div>
                    <h3 className="overview">TedEd Overview of Sickle Cell Anemia</h3>
                </div>
                <div className="video">
                    <iframe title="sickleCellVideo" width="560" height="315" src="https://www.youtube.com/embed/hRnrIpUMyZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>





            </aside>





            <footer>Sickle Cell Tracker App</footer>




        </div>

    )
}
export default GeneralInformation;