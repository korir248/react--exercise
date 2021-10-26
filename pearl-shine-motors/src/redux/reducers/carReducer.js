import { ADD_TO_CART, ADD_NUM_ITEMS_CART, REDUCE_NUM_ITEMS_CART, REMOVE_FROM_CART } from "../types";
import { myCars } from "../../components/Cars";

const cars = myCars

const carReducer = (state= cars,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,

            }
        case REMOVE_FROM_CART:
            return {
                // state.filter((car) => car.id != action.payload)
            }
                
        case ADD_NUM_ITEMS_CART:
            return {
                
            }
        case REDUCE_NUM_ITEMS_CART:
            return {

            }
    
        default:
            return state;
    }
}

export default carReducer
