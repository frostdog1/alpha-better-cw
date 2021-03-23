// #################### THIS ADDS DATA TO MONGODB ##############################
// the products data will be passed into the database specified in the .env file
// as you will see in scripts sections of the root package.json... 
// "data:import": "node seederScript.js"  has been defined.
// to execute this script, "npm run data:import" is used
// #############################################################################

require("dotenv").config({path: "./config.env"});

// import the products data
const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

// connect to database
connectDB();

const importData = async () => {
try {

    // remove all items in the db to avoid duplication
    await Product.deleteMany({});

    // insert every item from data file into product model
    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
} catch (error) {
    // if erorr occurs send error
    console.error("Error with data import", error);
    process.exit(1);
}
};

// run importData() function
importData();
