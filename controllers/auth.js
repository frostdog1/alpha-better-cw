// bring in user model
const User = require('../models/User')

// set up response when register is called
// as working with db, async func required
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
        res.status(201).json({
            success: true,
            user: user,
        });
    } catch (error) {
        // status 500 internal server error
        res.status(500).json({
            success: false,
            error: error.message,
        });
        
    }
   

};

// set up response when login is called
// as login will make a db request, it needs to be async function
exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    // check that the email/password has been previously provided
    if(!email || !password){
        // status 400 bad/invalid request
        res.status(400).json({ success: false, error: "Please provide an email and password"});
    }

    try {
        // use the email as its unique to find the user in db
        // this will return all the user details and the password
        const user = await User.findOne({ email }).select("+password");

        // if no user is returned
        if(!user) {
            // status 404 user not found
            res.status(404).json( {success: false, error: "Invalid user credentials"});
        }

        // now check that the user password matches
        // a method is created in models/user to do this
        // the method is used on the user defined above
        const passwordMatch = await user.matchPassword(password);

        // if string password does not match one from db
        if(!passwordMatch){
            // status 404 user not found
            res.status(404).json({ success: false, error: "Password is incorrect"});
        }

        // once email and password is checked, respond with a jsonWebToken so they can login
        res.status(200).json({
            success: true,
            token: "we90r8env",
        });

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