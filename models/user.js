const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
const UserSchema = new Schema({
    first_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
    last_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        isEmail: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;