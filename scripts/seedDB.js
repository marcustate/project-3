const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/doctors"
);

const medicalSeed = [
    {
        diagnosis: "Retinopathy",
        definition: "A new Radiodensity on check radiograph accompanied by fever and/or respiratory symptoms",
        treatment: "Basic management will include prompt pain relief, incentive spirometry and treatment of bacterial or viral infection. Blood transfusion should be considered early in the hypoxic patient. A simple (top-up) transfusion may suffice in early or less severe disease but exchange transfusion will be necessary if there are features of clinical severity or a lack of response to simple transfusion."
    },
    {
        diagnosis: "Avascular Necrosis",
        definition: "The death of bone tissue due to a lack of blood supply.",
        treatment: "There are several treatments that can help to relieve pain. Physical therapy and exercises may be recommended. In severe cases, surgery may be recommended."
    },
    {
        diagnosis: "Priapism",
        definition: "A priapism attack is a sickle cell crisis that is localised to the penis. The sickled red blood cells cause a disruption to the normal flow of blood within the penis, causing the blood to get trapped and keeping the penis in the erect state.",
        treatment: "Helpful strategies for dealing with priapism include drinking water, taking painkillers, heat packs and the application of warm water to the penis. Exercise such as doing squats, jogging, cycling or running up and down stairs can resolve a priapism attack. Emptying the bladder during the night to avoid early morning erections has been reported as a beneficial preventative measure in some cases."
    },
    {
        diagnosis: "PSR/NPR",
        definition: "Retinal vascular disease, or damage to the retina caused by abnormal blood flow.",
        treatment: "The goal of therapy for NPSR/PSR is to prevent development of ischemia, infarction and the dreaded complication of neovascularization. Complete ophthalmic examination twice a year is recommended for sickle cell patients (SC,SS, S-thal, etc). Baseline fluorescein angiography may be performed to examine blood flow in the retina and choroid."
    }
];

db.Doctor
    .remove({})
    .then(() => db.Doctor.collection.insertMany(medicalSeed))
    .then(data => {
        console.log(data.result.n + "diagnosis inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });