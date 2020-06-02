const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/doctors");

    const goalSeed = [
    {
        wellnessInput: "To drink 10 oz of water every two hours",
        date: new Date(Date.now())
    },
    {
        wellnessInput: "To walk 5 miles a day",
        date: new Date(Date.now())
    },
    {
        wellnessInput: "To take blood pressure every morning and record it",
        date: new Date(Date.now())
    }
];

db.Goal 
.remove({})
.then(() => db.Goal.collection.insertMany(goalSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});