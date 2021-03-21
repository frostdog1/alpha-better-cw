// upon start, as configured in package.json, nodemon will run
// gain accesss to the PATH variable found in config.env
// dotenv MUST be declared at the start so everything else below has access to its properties
require('dotenv').config({path: "./config.env"});

// define express
const express = require('express');

// declare connectDB to db.js module
// must be declared after 'dotenv' as the module requires access to process.env
const connectDB = require('./config/db')

// connect to the database
connectDB();

// bring the error handler middleware into the server
const errorHandler = require('./middleware/error')

// initialise express with variable 'app'
const app = express(); // 12:15

// middleware that allows to extract items from body (used in controllers/auth)
app.use(express.json());

// ################# connecting routes ####################

// upon each request, this middleware catches it then checks 
// if its to /api/auth... then redirect to routes/auth
app.use('/api/auth', require("./routes/auth"));
// redirect the private files to routes/private
app.use('/api/private', require("./routes/private"));

// the ErrorHandler must be the last middleware used
app.use(errorHandler);

// check environment variables for PORT number.
const PORT = process.env.PORT

// listen on port variable, call back a response to show connection
app.listen(PORT, () => console.log(`server running on port ${PORT}`))


