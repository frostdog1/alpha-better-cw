// this piece of middleware will check for json web tokens in the headers
// if something goes wrong, next() will not allow navigation to next route
// instead next will just return an error message

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const CustomError = require('../utils/customError');

exports.protect = async (req, res, next) => {
    let token;

    // going to add "Bearer" in front of the token
    // this shows it is an authentication bearing header
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        // split on the space, example: "Bearer 348763ioijoerjfoe" (i.e the token)
        // then take the token at array pos 1
        token = req.headers.authorization.split(" ")[1];
    }
    // if header there but no token
    if(!token) {
        // use CustomError handler to return 401 anauthorised access
        return next(new CustomError("Unathorised access", 401))
    }
    
    try {
        // verify() decrypts token, verifies based off of the jwt_secret used in sign() function
        // (see in models/User signToken function)
        const decryptedToken = jwt.verify(token, process.env.JWT_SECRET)

        // id is received from token by way of .sign(payload) (again in signToken function)
        const user = await User.findById(decryptedToken.id);

        // if no user can be found
        if(!user){
            // means that id could not be found, 404 not found status
            return next(new CustomError("There is no user with that ID", 404));
        }

        req.user = user;
        next();
    } catch (error) {
        // if all fails, 401 unauthorised access error
        return next(new CustomError("Unauthorised access", 401));
    }

}