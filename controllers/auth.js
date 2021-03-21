// bring in user model
const User = require('../models/User')
// bring in the error response handler
const CustomError = require('../utils/customError');

// set up response when register is called
// as working with db, async func required
// errors will be handled by function in (middleware/error) using next()
exports.register = async(req, res, next) => { 
    // extract user details from the body
    const {username, email, password} = req.body;

    try {
        const user = await User.create({
            // middleware used in models/User to hash password
            // avoids bloating controller function with hashing functionality
            username, email, password,
        });

        // status 201 new resource created successfully
        giveToken(user, 201, res); // call giveToken function defined below
    } catch (error) {
        // pass the custom error messages 
        next(error)
    }


};

// set up response when login is called
// as login will make a db request, it needs to be async function
exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    // check that the email/password has been previously provided
    if(!email || !password){
        // as defined in middleware/error, a CustomError takes a message and status code
        // as server will not process request, 400 bad request used
        return next(new CustomError("Please enter your email and password", 400))
    }

    try {
        // use the email as its unique to find the user in db
        // this will return all the user details (id, username, email) and the password
        const user = await User.findOne({ email }).select("+password");

        // if no user is returned
        if(!user) {
            // status 401 unauthorised user request
            return next(new CustomError("Cannot find a user with these login details", 401))
        }

        // now check that the user password matches
        // a method is created in models/user to do this
        // the method is used on the user defined above
        const passwordMatch = await user.matchPassword(password);

        // if string password does not match one from db
        if(!passwordMatch){
            // status 401, unauthorised user request
            return next(new CustomError("Please enter your email and password", 401))
        }

        // once email and password is checked, respond with a jsonWebToken so they can login
        giveToken(user, 200, res); // 200 OK, successful request

    } catch (error) {
        // status 500 internal server error
        res.status(500).json({ success: false, error: error.message});
    }

}

// set up response when forgotPassword is called
exports.forgotPassword = (req, res, next) => {
    res.send("Forgot Password Route")

}

// set up response when resetPassword is called
exports.resetPassword = (req, res, next) => {
    res.send("Reset Password Route")

}

// token requires user email and id, statusCode and resonse cylce
const giveToken = (user, statusCode, res) => {
    // as user receives all user details upon successful login
    // there is access to this._id
    // signToken uses id as the payload for the jwt
    const Token = user.signToken();

    // respond with the token 
    res.status(statusCode).json({ success: true, Token})
}