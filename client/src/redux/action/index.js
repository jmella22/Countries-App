export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_NAME_BY_ID = "GET_NAME_BY_ID";
export const SET_NAME = "SET_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const getAllCountries = () => (dispatch) => {
  return fetch("http://localhost:3000/countries")
    .then((r) => r.json())
    .then((j) => {
      dispatch({ type: GET_ALL_COUNTRIES, payload: j });
    })
    .catch((error) => {
      console.log("Error en GetAllCountries", error);
    });
};

// export function getAllCountries() {
//   return async function (dispatch) {
//     var j = await axios.get("http://localhost:3000/countries");
//     return dispatch({
//       type: GET_ALL_COUNTRIES,
//       payload: j.data,
//     });
//   };
// }
