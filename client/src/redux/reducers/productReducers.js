import * as actionTypes from "../constants/productConstants";

// ######################### GET PRODUCTS ##########################
// function will have a state object of the products array and the recieved action
export const getProductsReducer = (state = { products: [] }, action) => {

    //  check what the actionType is
    switch (action.type) {
        
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                // to avoid crashes, loading will be set to true to allow the application
                // to wait until this value is false before displaying certain items
                loading: true,
                products: [], // products will still be equal to nothing
            };
        // if there's confirmation that application has the products...
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload, // add array from action.payload to products array.
                loading: false,  // loading is false
            };
        // if there was a failure to get the products...
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false, 
                error: action.payload, // an error message will be sent using the action.payload
            };
        default:
            return state;
    }
};

// ######################### GET PRODUCT DETAILS ##########################
// to be executed if a user tries to view an individual product

export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        // if user attempts to get view product details...
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true, // allowing for loading to avoid crash
            };
        // if confirmation details have been retrieved successfully...
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false, // no loading
                product: action.payload, // payload will add that individual product to product object
            };
        // if the product details were not retrieved for any reason
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload, // send error using payload
            };
        // if user wants to clear individual product details then...
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}, // send empty product
            };
        default:
            return state;
    }
};
