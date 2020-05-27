import React from 'react';
import './search.css'


function Search() {
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
                            <td>Acute Chest Syndrome</td>
                            <td>A new Radiodensity on check radiograph accompanied by fever and/or respiratory symptoms</td>
                            <td>Basic management will include prompt pain relief, incentive spirometry and treatment of bacterial or viral infection. Blood transfusion should be considered early in the hypoxic patient. A simple (top-up) transfusion may suffice in early or less severe disease but exchange transfusion will be necessary if there are features of clinical severity or a lack of response to simple transfusion.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Cerebral Infarction</td>
                            <td>A cerebral infarction is an area of necrotic tissue in the brain resulting from a blockage or narrowing in the arteries supplying
                            blood and oxygen to the brain. A.K.A Stroke
</td>
                            <td>If cerebral infarction is caused by a thrombus occluding blood flow to an artery supplying the brain, definitive therapy is aimed at removing the blockage by breaking the clot down (thrombolysis), or by removing it mechanically (thrombectomy). The more rapidly blood flow is restored to the brain, the fewer brain cells die. In increasing numbers of primary stroke centers, pharmacologic thrombolysis with the drug tissue plasminogen activator (tPA), is used to dissolve the clot and unblock the artery. Another intervention for acute cerebral ischaemia is removal of the offending thrombus directly. This is accomplished by inserting a catheter into the femoral artery, directing it into the cerebral circulation, and deploying a corkscrew-like device to ensnare the clot, which is then withdrawn from the body. Mechanical embolectomy devices have been demonstrated effective at restoring blood flow in patients who were unable to receive thrombolytic drugs or for whom the drugs were ineffective, though no differences have been found between newer and older versions of the devices. The devices have only been tested on patients treated with mechanical clot embolectomy within eight hours of the onset of symptoms.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Renal Vasculopathy</td>
                            <td>Renal complications and involvement in sickle cell nephropathy (SCN) include altered haemodynamics, hypertrophy, assorted glomerulopathies, chronic kidney disease, acute kidney injury, impaired urinary concentrating ability, distal nephron dysfunction, haematuria, and increased risks of urinary tract infections and renal medullary carcinoma@twitter
</td>
                            <td>All these complications should be treated and monitored by a nephrologist as treatment is dependent upon the specific patient as well as the specific complications the patient is experiencing.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Proliferative and Non-proliferative Sickle Retinopathy(PSR/NPSR)</td>
                            <td>Retinal vascular disease, or damage to the retina caused by abnormal blood flow.</td>
                            <td>The goal of therapy for NPSR/PSR is to prevent development of ischemia, infarction and the dreaded complication of neovascularization. Complete ophthalmic examination twice a year is recommended for sickle cell patients (SC,SS, S-thal, etc). Baseline fluorescein angiography may be performed to examine blood flow in the retina and choroid.</td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Vaso-Occlusive Crisis</td>
                            <td>A vaso-occlusive crisis occurs when the microcirculation is obstructed by sickled RBCs, causing ischemic injury to the organ supplied and resultant pain.</td>

                            <td>Rehydration, oxygen therapy, blood transfusion, pain management</td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Priapism</td>
                            <td>A priapism attack is a sickle cell crisis that is localised to the penis. The sickled red blood cells cause a disruption to the normal flow of blood within the penis, causing the blood to get trapped and keeping the penis in the erect state.</td>

                            <td>Helpful strategies for dealing with priapism include drinking water, taking painkillers, heat packs
                            and the application of warm water to the penis. Exercise such as doing squats, jogging, cycling
                            or running up and down stairs can resolve a priapism attack. Emptying the bladder during the
                            night to avoid early morning erections has been reported as a beneficial preventative measure
                            in some cases.
</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Avascular Necrosis</td>
                            <td>The death of bone tissue due to a lack of blood supply</td>

                            <td>There are several treatments that can help to relieve pain. Physical therapy and exercises may be recommended. In severe cases, surgery  may be recommended. </td>
                        </tr>


                    </tbody>
                </table>
            </div >



        </div >

    )
}
export default Search;