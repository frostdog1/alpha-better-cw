// import action types will give all the constants that are needed (i.e. ADD_TO_CART, REMOVE_FROM_CART)
import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
    cartItems: [],
};

// state equal to an array of items and an action as a default state
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    // check the action.type
    switch (action.type) {
        
        case actionTypes.ADD_TO_CART:
            // action.payload will get the item the user wants to add
            // this expects the item, and the item can be built up in actions/cartActions
            const item = action.payload;

            // check if the item already exists in the cart by mapping through the cartItems array
            // product will reference item by id, so if id is already in cart then it will return the exist item
            const existItem = state.cartItems.find((x) => x.product === item.product);

            // if it actually exists, do following to cart state
            if (existItem) {
                return {
                ...state, // spread the state of the cart
                // set cartItems to new cartItems array, go through old array and map through each item in that array
                // check if the current item being mapped through is equal to the existing item
                cartItems: state.cartItems.map((x) => 
                    // if that is true then set item (action.payload) to the new item
                    x.product === existItem.product 
                    // else set it to current item that is being mapped through
                    ? item : x
                ),
                };

            } else { // if item has NOT been found
                return {
                ...state, // spread the state
                cartItems: [...state.cartItems, item], // spread cartItems and add new item to the array
                };
            }
            // if actionType is to remove, where user has clicked the delete button on a item
            case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, // spread state
                // take state of cartItems and filter through each individual item
                // add everything to the array where the item.product (id) is not equal to REMOVE_FROM_CART
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };

            // if one of the action types is not one that is already set then return default state
            default:
                return state;
    }
};
