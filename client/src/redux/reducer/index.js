import {
  FILTER_BY_SELECT,
  GET_ALL_COUNTRIES,
  GET_BY_NAME,
  GET_NAME_BY_ID,
  GET_NAME_USER,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  POST_ACTIVITY,
} from "../action";

const initialState = {
  nameUser: " ",
  countries: [],
  allCountries: [],
  detailCountry: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allcountries: action.payload,
      };

    case FILTER_BY_SELECT:
      const countriesAll = state.allcountries;
      const countriesFilter =
        action.payload === "All"
          ? countriesAll
          : countriesAll.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: countriesFilter,
      };

    case ORDER_BY_NAME:
      const sortName =
        action.payload === "rnd"
          ? state.allCountries
          : action.payload === "asc"
          ? state.countries.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              } else if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              } else if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortName,
      };

    case ORDER_BY_POPULATION:
      const sortPopulation =
        action.payload === "rnd"
          ? state.Cllcountries
          : action.payload === "asc"
          ? state.countries.sort((a, b) => {
              if (parseInt(a.population) < parseInt(b.population)) {
                return -1;
              } else if (parseInt(a.population) > parseInt(b.population)) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (parseInt(a.population) < parseInt(b.population)) {
                return 1;
              } else if (parseInt(a.population) > parseInt(b.population)) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortPopulation,
      };

    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_NAME_BY_ID:
      return {
        ...state,
        detailCountry: action.payload,
      };

    case GET_NAME_USER:
      return {
        ...state,
        nameUser: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
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
