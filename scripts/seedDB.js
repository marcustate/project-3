const mongoose = require("mongoose");
const db = require("./project-3/models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/doctors"
);

const medicalSeed = [
    {
        diagnosis: " ",
        definition: " ",
        treatment: " "
    },
    {
        diagnosis: " ",
        definition: " ",
        treatment: " "
    },
    {
        diagnosis: " ",
        definition: " ",
        treatment: " "
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