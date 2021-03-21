// this middle ware will be used to handle errors, and will be broguht into server.js
// the purpose is so that error messages will not have to be repeated
const CustomError = require('../utils/customError');

// whenever next() from controllers/auth is passed an error
// it will automatically be sent to this errorHandler

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(err);

    // check duplicate error key (mongoose code 11000 defines this)
    if (err.code === 11000){
        const message = `Duplicate Field Value Entered`;
        // send message with bad request status code
        error = new CustomError(message, 400)
    }

    // whenever it is a Error.ValidationError, will recieve an object
    // object contains many nested onjects
    if(err.name === "ValidationError"){
        // take object which conains the values of the error field 
        // then create an array from it
        // then map over the array, for each value add the val.message
        // add those messages to the message variable
        const message = Object.values(err.errors).map((val) => val.message);
        // set error to the validationerror message, along with bad request status
        error = new CustomError(message, 400)

    }

    // all responses will come from the error handler
    // check status code, if no status code set then server error, 500
    res.status(err.statusCode || 500).json({
        success: false, // set false as this is error handler
        // set to error msg, if any errors besides whats defined, give a custom error msg
        error: error.message || "Oops, server error"
    })

}

module.exports = errorHandler;