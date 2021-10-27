import { SEARCH_BY_MAKE_MODEL_YEAR } from "../types";
import { myCars } from "../../components/Cars";




const cars = myCars

const carReducer = (state= cars,action)=>{
    switch (action.type) {
        case SEARCH_BY_MAKE_MODEL_YEAR:
            return {
                
            }
    
        default:
            return state;
    }
}

export default carReducer
