import axios from "axios";

export const ALL_COUNTRIES = "ALL_COUNTRIES";
export const COUNTRY_DETAIL = "COUNTRY_DETAIL";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY"
export const FILTER_CONTINENT = 'FILTER_CONTINENT';

export const allCountries = () => {
  return async (dispatch) => {
    try {
      const countries = await axios.get("http://localhost:3001/countries");
      dispatch({ type: ALL_COUNTRIES, payload: countries.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const countryDetail = (id) => {
  return async (dispatch) => {
    try {
      const detail = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: COUNTRY_DETAIL, payload: detail.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addActivity = (payload) => {
  return async (dispatch) => {
    try {
     const newActivity = await axios.post(`http://localhost:3001/activity`, payload);
     dispatch({ type: ADD_ACTIVITY, payload: newActivity.data})
    } catch (error) {
      console.log(error);
    }
  };
  //await axios.post("http://localhost:3001/activity", payload);
};

export const searchCountry = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
      console.log('response DATA', response.data)
      dispatch({ type: SEARCH_COUNTRY, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
