// This file will dispatch all actions relating to gettting from the database

import * as actionTypes from "../constants/productConstants";
// axios for AJAX
import axios from "axios";

// on the homepage, this function will be called
export const getProducts = () => async (dispatch) => {
    
    try {
        // as set up in reducers, GET_PRODUCTS_REQUEST will set loading to true
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

        // make request to the api
        const { data } = await axios.get("/api/products");

        // then on retrieval of the products array...
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data, // deliver the payload
        });
        // if the products failed to be retrieved
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload:
                // if this error has a response and a message then...
                error.response && error.response.data.message
                // send back the data.message
                ? error.response.data.message
                // else return error.message on its own
                : error.message,
        });
    }
};

// function requires an id to get the details from
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        // find product by ID
        const { data } = await axios.get(`/api/products/${id}`);

        // once product is in the data...
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data, // pass data through with payload
        });
    } catch (error) {
        // else if theres an error then nothing changes, error returned
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// remove an individual product details
export const removeProductDetails = () => (dispatch) => {
    // dispath the action handled by the productReducers.js file
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
