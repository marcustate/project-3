const mongoose = require("mongoose");
const db2 = require("../models/goal");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/wellnesstrack");

    const goalSeed = [
    {
        wellnessInput: "To drink 10 oz of water every two hours",
        date: new Date(Date.now())
    }
];

db2.Goal 
.remove({})
.then(() => db2.Goal.collection.insertMany(goalSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});