import { GET_ALL_COUNTRIES } from "../action";

const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

// function rootReducer(state = initialState, action) {
//   if (action.type === GET_ALL_COUNTRIES) {
//     return {
//       ...state,
//       countries: action.payload,
//     };
//   } else {
//     return {
//       ...state,
//     };
//   }
// }

export default rootReducer;
