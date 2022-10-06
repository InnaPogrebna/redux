import { INPUT_TEXT } from "./types";

//// reducer for Title component //////

const initialState = {
  text: 'Woow',
}
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      }
    default:
      return state;
  }
}