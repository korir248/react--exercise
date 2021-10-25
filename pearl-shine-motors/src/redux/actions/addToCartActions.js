import {ADD_TO_CART, ADD_NUM_ITEMS_CART} from '../types'


export const addToCart = ()=>{
    return {
        type: ADD_TO_CART,
        // payload: car
    }
}

export const addNumItemsCart= ()=>{
    return {
        type: ADD_NUM_ITEMS_CART,
        payload: 1
    }
}