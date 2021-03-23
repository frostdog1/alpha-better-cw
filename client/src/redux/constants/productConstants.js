// When users initially make a request to the api the following will be sent so that loading can be added as true
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
// when product has been retrieved the following will be used
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
// if something went wrong with getting the products, the following will be used
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

// the following is for when an individual product is fetched
export const GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCTS_FAIL";
export const GET_PRODUCT_DETAILS_RESET = "GET_PRODUCTS_RESET";
