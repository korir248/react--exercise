import { ADD_COUNT, SUBTRACT_COUNT } from "../types";

export const addCount = () => {
  return {
    type: ADD_COUNT,
    payload: 10,
  };
};

export const subtractCount = () => {
  return {
    type: SUBTRACT_COUNT,
    payload: 1,
  };
};
