import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, REDUCE_QUANTITY,EMPTY_CART } from "../types";
import { myCars } from "../../components/Cars";

let cart= []
// const cars = myCars
console.log(myCars);

const cartReducer = (state= cart,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: myCars.map((car)=>{
                    if (car.id === action.id) {
                        return state.push({...car,isInCart: true})                        
                    }
                })
            }
        case REMOVE_FROM_CART:
            return {
                
            }
        case INCREASE_QUANTITY:
            return{

            }
        case REDUCE_QUANTITY:
            return {

            }
        case EMPTY_CART:
            return
        default:
            return state;
    }
}

export default cartReducer
