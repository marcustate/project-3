const mongoose = require("mongoose");
import bcrypt from ("bcrypt-nodejs")

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
    }
});
userSchema.pre('save', function(next){
    const user = this;
    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err); }
            user.password = hash;
            next()
        })
    })
})
userSchema.methods.comparedPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, good){
        if (err ) { return cb(err)};
        cb(null, good);
    })
}
const User = mongoose.model("User", userSchema);

module.exports = User;