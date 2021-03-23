// to be used with the productControllers.js

const express = require("express");
const router = express.Router();

// import the product controllers
const {
    getAllProducts,
    getProductById,
} = require("../controllers/productController");

// get all the products from the database
router.get("/", getAllProducts);

// get any product by id from the database
router.get("/:id", getProductById);

// export to router, give access to these routes
module.exports = router;