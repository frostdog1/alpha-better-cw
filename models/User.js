// this file will make use of mongoose schemas to provide a comprehensive user model

const mongoose = require('mongoose'); // bring in mongoose
const bcrypt = require('bcryptjs') // bring in bcrypt for hashing passwords
const jwt = require('jsonwebtoken'); // jsonwebtoken required for signed token function

// this function takes in object and defines a json schema for users
const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, "Please provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        // match uses a regular expression to ensure the email is a valid one
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    }, 
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        // select property defines if the password should be returned as well 
        select: false, // set to false so it wont be returned unless queried
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
UserSchema.methods.matchPassword = async function(password) {
    // this.password refers to the password selected from (controllers/auth)
    return await bcrypt.compare(password, this.password)
}

// this function will use json web token and return a signed token
UserSchema.methods.signToken = function() {
    // sign() payload is object that contains id field
    // sign() secret is a random hash value in config.env
    // sign() expiresIn is 10min also defined in config.env
    // this._id refers to id from user object (as defined in Models/User.login)
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE}); 

    // should be noted process.env is accessible due to
    // it being declared before auth in server

}

// set User to the UserSchema model
const User = mongoose.model("User", UserSchema);

// allows access to this user model
// use this in controller/auth
module.exports = User;