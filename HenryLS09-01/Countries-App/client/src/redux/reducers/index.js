import {
  ALL_COUNTRIES,
  COUNTRY_DETAIL,
  SEARCH_COUNTRY,
  ADD_ACTIVITY,
  FILTER_CONTINENT
} from "../actions";

const initialState = {
  allCountries: [],
  countryDetail: {},
  loading: false,
  searchResults: [],
  newActivity: [],
  filteredByContinent:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };

    case COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case SEARCH_COUNTRY:
      return {
        ...state,
        searchResults: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        newActivity: action.payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        filteredByContinent: action.payload,
      }

    default:
      return state;
  }
};
export default rootReducer;

/* export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_COUNTRIES:
      return { ...state, countries: payload };
 */
/*  case FILTER_COUNTRIES:
      return { ...state, showed: payload }; */

/* case GET_COUNTRY_DETAIL:
      return { ...state, countryDetail: payload };

    default:
      return state;
  }
}; */
