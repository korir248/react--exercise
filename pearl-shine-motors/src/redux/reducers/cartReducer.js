import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";
import { myCars } from "../../components/Cars";

const cart= []
const cars = myCars
console.log(cars);

const cartReducer = (state= cart,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state

            }
        case REMOVE_FROM_CART:
            return {
                
            }
        default:
            return state;
    }
}

export default cartReducer
