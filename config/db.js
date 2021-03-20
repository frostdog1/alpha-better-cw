// require the mongoose package that was installed at the start
const mongoose = require("mongoose");

// this function will handle the connection to mongoDB using mongoose
const connectDB = async () => {
    try{
        // the URI required by connect() is defined in the congfig.env file
        await mongoose.connect(process.env.MONGO_URI, {
            // passing in all the settings
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB has been connected successfully');
    }
    catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1);

    }

}

module.exports = connectDB;