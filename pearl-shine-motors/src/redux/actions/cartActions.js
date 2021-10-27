import {ADD_TO_CART, INCREASE_QUANTITY, REDUCE_QUANTITY, REMOVE_FROM_CART} from '../types'


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

export const increaseQuantity= (quantity)=>{
    return {
        type: INCREASE_QUANTITY,
        payload: quantity
    }
}

export const reduceQuantity= (quantity)=>{
    return {
        type: REDUCE_QUANTITY,
        payload: quantity

    }
}

