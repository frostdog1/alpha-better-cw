const mongoose = require('mongoose');

// bring in bcrypt for hashing passwords
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, "Please provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    }, 
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    // set the reset tokens
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

// hash password before user details is saved
UserSchema.pre("save", async function(next) {
    // check if password has not been modified so it wont be rehashed
    if(!this.isModified("password")){
        next();
    }

    // create a salt (random string for unpredictable hash)
    // higher genSalt value, more secure
    const salt = await bcrypt.genSalt(10);

    // this.password refers to the password field declared in controllers/auth
    // setting that field to the hashed version of that password
    this.password = await bcrypt.hash(this.password, salt);
    // then save it
    next(); 
});

// function will recieve String password extracted from the body (controllers/auth)
// and compare to the password in the database
UserSchema.methods.matchPasswords = async function(password) {
    // this.password refers to the password selected from (controllers/auth)
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", UserSchema);

// allows access to this user model
// use this in controller/auth
module.exports = User;