import React from 'react';



function acuteChestSyndrome() {
    return (
        <div className="maincontainer">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text-center">Please Search For Other Diagnoses Related to Sickle Cell Anemia </h3>
                </div>
            </div>

            <div>
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
            </div >



        </div >

    )
}
export default acuteChestSyndrome;