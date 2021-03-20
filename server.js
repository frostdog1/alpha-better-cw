// upon start, as configured in package.json, nodemon will run
// gain accesss to the PATH variable found in config.env
// dotenv MUST be declared at the start so everything else below has access to its properties
require('dotenv').config({path: "./config.env"});

// define express
const express = require('express');

// define connectDB to db.js module
// must be declared after 'dotenv' as the module requires access to process.env
const connectDB = require('./config/db')

// connect to the database
connectDB();

// initialise express with variable 'app'
const app = express(); // 12:15

// middleware that allows to extract items from body (used in controllers/auth)
app.use(express.json());

app.use('/api/auth', require("./routes/auth"));

// check environment variables for PORT number.
const PORT = process.env.PORT

// listen on port variable, call back a response to show connection
app.listen(PORT, () => console.log(`server running on port ${PORT}`))

/* app.post('/clicked', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    console.log(connectDB);

    db.collection('clicks').save(click, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('click added to db');
        res.sendStatus(201);
    }); 

}); */
