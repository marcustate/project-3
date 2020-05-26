import React from 'react';
import './search.css'


function retinopathy() {
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
                            <td>PSR/NPR</td>
                            <td>Retinal vascular disease, or damage to the retina caused by abnormal blood flow.</td>
                            <td>The goal of therapy for NPSR/PSR is to prevent development of ischemia, infarction and the dreaded complication of neovascularization. Complete ophthalmic examination twice a year is recommended for sickle cell patients (SC,SS, S-thal, etc). Baseline fluorescein angiography may be performed to examine blood flow in the retina and choroid.</td>
                        </tr>

                    </tbody>
                </table>
            </div >



        </div >

    )
}
export default Retinopathy;