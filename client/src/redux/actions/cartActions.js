// this file is where HTTP requests will be made to get the products details and add it to the cart

// get the actionTypes
import * as actionTypes from '../constants/cartConstants';
// axios will help with AJAX requests
import axios from 'axios';

// ################## HANDLE ADD_TO_CART ###################

// function takes product id and quantity of product
// returns an asyncronous function which has access to the dispatch and getState functions (using redux Thunk)
export const addToCart = (id, qty) => async (dispatch, getState) => {
    // destructure the data of axios request
    // then make api request the server using the id
    // this takes id bc it is defined in routes/productRoutes as router.get("/:id", getProductById);
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        // the item is set to action.payload in reducers/cartReducers
        // so payload is equal to an object that has the following attributes:
        payload: {
            product: data._id, 
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }

    })

    // save this cart to localStorage
    // 
    localStorage.setItem('cart,', JSON.stringify(getState().cart.cartItems));

}

// ################## HANDLE REMOVE_FROM_CART ###################

// get the dispatch and getState from the action, as when an item is removed, localStorage needs to be updated 
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        // send payload with id that user chose to remove
        payload: id,

    })
    // update localStorage by removing that item
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));


}