import { createStore, combineReducers, applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import the reducers
import { cartReducer } from "./reducers/cartReducers";
import {
    getProductsReducer,
    getProductDetailsReducer,
} from "./reducers/productReducers";


// pass object with all the different reducers
const reducer = combineReducers({
    // add the following reducers to redux state
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

// create an array that contains all of the middleware
// thunk helps to make asyncronous requests in actions
const middleware = [thunk];


const cartItemsInLocalStorage = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")): [];

const INITIAL_STATE = {
    cart: {
    cartItems: cartItemsInLocalStorage,
    },
};

// create the store
const store = createStore(
    reducer,
    INITIAL_STATE,
    // the enhancer gives access to the states, i.e. Action, State, Diff, Trace, Test
    composeWithDevTools(applyMiddleware(...middleware)) // enhancer, spread the middleware
);

export default store;
