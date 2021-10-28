import { ADD_INPUT_VALUE, SEARCH_BY_MAKE_MODEL_YEAR } from "../types"

export const searchByMakeModelYear = (make,model,year)=> {
    return {
        type: SEARCH_BY_MAKE_MODEL_YEAR,
        payload: make || model || year,
    }
}
export const addInputValue = (searchInput)=>{
    return {
        type: ADD_INPUT_VALUE,
        payload: searchInput
    }
}