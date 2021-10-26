import { createStore, applyMiddleware } from "redux";
import {  combineReducers} from 'redux'
import cartReducer from "./reducers/cartReducer";
import carReducer from "./reducers/carReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({car: carReducer, cart: cartReducer})

export const store= createStore(rootReducer, applyMiddleware(thunk))

