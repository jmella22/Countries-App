export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const FILTER_BY_SELECT = "FILTER_BY_SELECT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const SET_PAGE = "SET_PAGE"; // esta no la estoy ocupando
export const SET_ORDER = "SET_ORDER"; // esta no la estoy ocupando
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_NAME_BY_ID = "GET_NAME_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

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

export const setPage = (payload) => {
  return {
    type: SET_PAGE,
    payload,
  };
};

export const setOrder = (payload) => {
  return {
    type: SET_ORDER,
    payload,
  };
};
