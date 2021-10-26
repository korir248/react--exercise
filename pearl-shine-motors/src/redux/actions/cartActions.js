import {ADD_TO_CART, ADD_NUM_ITEMS_CART, REDUCE_NUM_ITEMS_CART, REMOVE_FROM_CART} from '../types'


export const addToCart = ()=>{
    return {
        type: ADD_TO_CART,
        
    }
}

export const removeFromCart= ()=>{
    return {
        type: REMOVE_FROM_CART,
    }
}

export const addNumItemsCart= ()=>{
    return {
        type: ADD_NUM_ITEMS_CART,
        payload: 1
    }
}

export const reduceNumItemsCart= ()=>{
    return {
        type: REDUCE_NUM_ITEMS_CART,
        payload: 1

    }
}

