import { ADD_TO_CART, ADD_NUM_ITEMS_CART } from "../types";


const myCart= []

const cartReducer = (state= myCart,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,  

            }
        case ADD_NUM_ITEMS_CART:
            return {
                
            }
    
        default:
            return state;
    }
}

export default cartReducer
