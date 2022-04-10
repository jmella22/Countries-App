import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const FILTER_BY_SELECT = "FILTER_BY_SELECT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_NAME_BY_ID = "GET_NAME_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_NAME_USER = "GET_NAME_USER";
export const POST_ACTIVITY = "POST_ACTIVITY";

export const getAllCountries = () => (dispatch) => {
  return fetch("http://localhost:3001/countries")
    .then((r) => r.json())
    .then((j) => {
      dispatch({ type: GET_ALL_COUNTRIES, payload: j });
    })
    .catch((error) => {
      console.log("Error en GetAllCountries", error);
    });
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_SELECT,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
};

export const getByName = (name) => (dispatch) => {
  return fetch(`http://localhost:3001/countries?name=${name}`)
    .then((r) => r.json())
    .then((j) => {
      dispatch({ type: GET_BY_NAME, payload: j });
    })
    .catch((error) => {
      console.log("Error en GetByName", error);
    });
};

export const getNameById = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/countries/${id}`)
    .then((r) => r.json())
    .then((j) => {
      dispatch({ type: GET_NAME_BY_ID, payload: j });
    });
};

export const getNameUser = (user) => {
  return {
    type: GET_NAME_USER,
    payload: user,
  };
};

// export const postActivity = (activity) => {
//   return fetch("http://localhost:3001/activity", {
//     method: "POST",
//     body: JSON.stringify(activity),
//   })
//     .then((r) => r.json())
//     .then((j) => {
//       console.log(j.success);
//       return j.success;
//     })
//     .catch((error) => {
//       console.log("Error en el posActivity", error);
//     });
// };

export function postActivity(activity) {
  return async (dispatch) => {
    const acti = await axios.post("http://localhost:3001/activity", activity);
    return dispatch({ type: POST_ACTIVITY, payload: acti });
  };
}
