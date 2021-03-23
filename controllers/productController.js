// this file will define how to fetch products for the client

const Product = require("../models/Product");


const getAllProducts = async (req, res) => {
try {
    // front end will make a request to this end point
    const products = await Product.find({});

    // then will receive all of the products
    res.json(products);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Whoops, server error" });
}
};

// only fetch one product
const getProductById = async (req, res) => {
try {
    //req.params.id is used because it is defined in the productRoutes.js
    const product = await Product.findById(req.params.id);

    // return that individual product
    res.json(product);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
}
};

// export the controllers
module.exports = {
    getAllProducts,
    getProductById,
};
