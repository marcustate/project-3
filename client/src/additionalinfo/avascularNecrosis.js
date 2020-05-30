import React from 'react';



function AvascularNecrosis() {
    return (
        <div className="maincontainer">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text Center">Please Search For Other Diagnoses Related to Sickle Cell Anemia </h3>
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
                            <td>Avascular Necrosis</td>
                            <td>The death of bone tissue due to a lack of blood supply.</td>
                            <td>There are several treatments that can help to relieve pain. Physical therapy and exercises may be recommended. In severe cases, surgery may be recommended.</td>
                        </tr>

                    </tbody>
                </table>
            </div >



        </div >

    )
}
export default AvascularNecrosis;