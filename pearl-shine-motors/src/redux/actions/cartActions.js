import {ADD_TO_CART, ADD_NUM_ITEMS_CART, REDUCE_NUM_ITEMS_CART, REMOVE_FROM_CART} from '../types'


export const addToCart = (car)=>{
    return {
        type: ADD_TO_CART,
        car
        
    }
}

export const removeFromCart= (id)=>{
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const addNumItemsCart= (quantity)=>{
    return {
        type: ADD_NUM_ITEMS_CART,
        payload: quantity
    }
}

export const reduceNumItemsCart= (quantity)=>{
    return {
        type: REDUCE_NUM_ITEMS_CART,
        payload: quantity

    }
}

