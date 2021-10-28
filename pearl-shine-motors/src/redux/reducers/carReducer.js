import { SEARCH_BY_MAKE_MODEL_YEAR,ADD_INPUT_VALUE } from "../types";
import { myCars } from "../../components/Cars";


const carReducer = (state= myCars,{type,payload})=>{
    switch (type) {
        case SEARCH_BY_MAKE_MODEL_YEAR:
            let searchInput =payload.toLowerCase();            
            let filteredCars = myCars.filter(car => car.make.toLowerCase().includes(searchInput) 
                                                    || car.model.toLowerCase().includes(searchInput) 
                                                    || car.year_of_prod.toLowerCase().includes(searchInput));
            // if(filteredCars){
            //     return [
            //         ...filteredCars
            //     ]
            // }else{
            //     return "No such Car was found"
            // }

            return [
                ...filteredCars                 
            ]
            case ADD_INPUT_VALUE:
                return {

                }
    
        default:
            return state;
    }
}

export default carReducer
