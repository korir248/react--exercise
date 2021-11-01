import { ADD_COUNT, SUBTRACT_COUNT } from "../types";

const initialState = 0;

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return state + payload;
    case SUBTRACT_COUNT:
      return state - payload;
    default:
      return state;
  }
};

export default counterReducer;
