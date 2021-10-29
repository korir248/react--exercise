import {ADD_TO_CART, EMPTY_CART, INCREASE_QUANTITY, ITEM_IN_CART, REDUCE_QUANTITY, REMOVE_FROM_CART} from '../types'


export const addToCart = (id)=>{
    console.log(id);
    return {
        type: ADD_TO_CART,
        payload: id
        
    }
}

export const removeFromCart = (id)=>{
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const emptyCart = ()=>{
    return {
        type: EMPTY_CART
    }
}

export const itemIsInCart = (id)=>{
    return {
        type: ITEM_IN_CART,
        payload: id
    }
}

// export const increaseQuantity = (quantity)=>{
//     return {
//         type: INCREASE_QUANTITY,
//         payload: quantity
//     }
// }

// export const reduceQuantity = (quantity)=>{
//     return {
//         type: REDUCE_QUANTITY,
//         payload: quantity

//     }
// }


