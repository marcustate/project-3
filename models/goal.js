const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    wellnessInput: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;