import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, ITEM_IN_CART, SEARCH_BY_MAKE_MODEL_YEAR } from "../types";
import { myCars } from "../../components/Cars";

const initialState = {
    cart:[],
    cars: myCars,
    search : []
} 

const cartReducer = (state= initialState,{type,payload})=>{
    switch (type) {
        case ADD_TO_CART:
            const specificCar = state.cars.find(car=>car.id===payload)

            // const itemInCart = state.cart.filter(cartItem=>cartItem.id === specificCar.id)

            // console.log(itemInCart)
            console.log(specificCar)
            return {
                ...state, 
                cart: [...state.cart, specificCar ]
            }
        case ITEM_IN_CART:

            return {
                ...state,
                cart: state.cart.filter((item)=>item.id===payload),
            }
        case SEARCH_BY_MAKE_MODEL_YEAR:
            let searchInput =payload.toLowerCase();            
            let filteredCars = state.cars.find(car => car.make.toLowerCase().includes(searchInput) 
                                                    || car.model.toLowerCase().includes(searchInput) 
                                                    || car.year_of_prod.toLowerCase().includes(searchInput));            

            console.log(filteredCars);
            state.search.push(filteredCars)

            console.log(state.search);
            return {
                ...state
            }                   
        case REMOVE_FROM_CART:
                        
            return {
                ...state,
                cart: [...state.cart.filter((item)=>item.id!==payload)]
                
            }
        case EMPTY_CART:
            console.log("Emptying cart...");
            return {
                ...state,
                cart: [],
                cars: myCars
                    
            }
        // case INCREASE_QUANTITY:
        //     return{

        //     }
        // case REDUCE_QUANTITY:
        //     return {

        //     }
        
        default:
            return state;
    }
}

export default cartReducer
