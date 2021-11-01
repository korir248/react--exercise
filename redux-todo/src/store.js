import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
