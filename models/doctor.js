const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    diagnosis: { type: String, required: true },
    definition: { type: String, required: true },
    treatment: { type: String, required: true}
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;