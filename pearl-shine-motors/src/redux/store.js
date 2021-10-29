import { createStore, applyMiddleware } from "redux";
import {  combineReducers} from 'redux'
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({cart: cartReducer})

export const store= createStore(rootReducer, applyMiddleware(thunk))