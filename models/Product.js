// ############### Product Model ###################
// This defines what an individual product will look like

const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    // product name    
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    // 
    imageUrl: {
        type: String,
        required: true,
    },
});

// create the actual model
const Product = mongoose.model("products", productSchema,);

// export product model
module.exports = Product;