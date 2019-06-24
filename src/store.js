<<<<<<< HEAD
import {createStore, applyMiddleware} from 'redux';
import { thunk} from 'redux-thunk';
const reducer = (state, action) => {
    if(action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            products: action.products
        };
    } else if(action.type === "ADD_TO_CART"){
=======
import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }else if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        };
    }
    return state;
};

<<<<<<< HEAD
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}
export default createStore(reducer, { cart:[], products: []  }, applyMiddleware(logger, thunk));
=======
export default createStore(reducer, {cart:[]});
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
