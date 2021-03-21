// This page will provide customised errors to specific issues an user may encounter
// provides a blueprint for error response message
class CustomError extends Error{
    // when a new object of type CustomError
    // it will receive a message and status code
    constructor(message, statusCode){
        // super is the actual error message
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = CustomError;