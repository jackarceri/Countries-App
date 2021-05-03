import React, { useState } from "react";
import Card from "../Card/Card";
import { searchCountry } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import './SearchBar.css'

function SearchBar() {
  const [countryName, setCountryName] = useState("");

  const results = useSelector((state) => state.searchResults);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(countryName));
    console.log('results: ' , results);
    //console.log('soyHandleSubmit')
  };

  return (
    <div className="sarchbar-container">
      <h2 className="title-search">Search for a country...</h2>
      <form className="search-container" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="label" htmlFor="title">
          
          </label>
          <input
            type="text"
            placeholder="Write a country name"
            id="countryName"
            autoComplete="off"
            value={countryName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn-web" type="submit">Search!</button>
        <div className="cards-list">
           {
             !results.length ? <p className="no-results">No results. Try looking for a Country!</p> : results?.map((country) => {return <Card country={country}/>})
          } 
        </div>
      </form>
      <div id="container-countries">
        <div>{}</div>
      </div>
    </div>
  );
}

export default SearchBar;
