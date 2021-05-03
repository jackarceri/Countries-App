import React from "react";
import Card from "../Card/Card";
import Pagination from "../../functions/Pagination";
import { allCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./Cards.css";

function Cards() {
  ///////filtering

  const [filtered, setFiltered] = useState("");

  ///// PAGINATION ///////

  const [countriesList, setCountriesList] = useState([]);
  //const [ loading, setLoading ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  //////// UPDATE PARA EL SORTING
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  ///////REDUX
  const countriesAll = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]); //watcheo por diferencias de tiempos entre back y front o api

  ///////////////////////////////////
  useEffect(() => {
    setCountriesList(countriesAll);
  }, [countriesAll]);

  ///////SORTING FUNCTIONS

  const sortyByPopulationAsc = (e) => {
    e.preventDefault();
    const sortedCountryList = countriesList.sort((a, b) =>
      a.population < b.population ? -1 : 1
    );
    setCountriesList(sortedCountryList);
    forceUpdate();
  };

  const sortyByPopulationDesc = (e) => {
    e.preventDefault();
    const sortedCountryList = countriesList.sort((a, b) =>
      a.population > b.population ? -1 : 1
    );
    setCountriesList(sortedCountryList);
    forceUpdate();
  };

  const sortByNameAsc = (e) => {
    e.preventDefault();
    const sortedCountryList = countriesList.sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    setCountriesList(sortedCountryList);
    forceUpdate();
  };

  const sortByNameDesc = (e) => {
    e.preventDefault();
    const sortedCountryList = countriesList.sort((a, b) =>
      a.name > b.name ? -1 : 1
    );
    setCountriesList(sortedCountryList);
    forceUpdate();
  };

  ///////CONTINENT FILTERING

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFiltered(e.target.value);
    console.log(e.target.value);
  };
  const handleFilterClick = (e) => {
    e.preventDefault();
    if (filtered) {
      const filteredCountriesList = countriesAll.filter(
        (country) => country.continent === filtered
      );
      setCountriesList(filteredCountriesList);
      return;
    }
    setCountriesList(countriesAll);
  };

/////ACTIVITY FILTERING
/* 
const [ filteredAct, setFilteredAct ] = useState();

const handleFilterChangeAct = (e) => {
  e.preventDefault();
  setFilteredAct(e.target.value);
  console.log(e.target.value);
};
const handleFilterClickAct = (e) => {
  e.preventDefault();
  console.log(countriesAll)
  if (filteredAct) {
    const filteredCountriesListAct = countriesAll.filter(
      (country) => country.Activities.season.includes(filteredAct)
    );
    setCountriesList(filteredCountriesListAct);
    return;
  }
  setCountriesList(countriesAll);
}; */



  ////////// PAGINATION
  const indexOfCountries = currentPage * countriesPerPage;
  const indexOfFirstCountries = indexOfCountries - countriesPerPage;
  const currentCountries = countriesList.slice(
    indexOfFirstCountries,
    indexOfCountries
  ); /////////recorto el array de countries para mostrar la cantidad que necesito por pagina

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="cards-wrapper">
      <div >
        <div className="filters-wrapper">
          Filter by Continent
          <div className="dropdown-menu">
            <select
              className="dropdown-options"
              value={filtered}
              onChange={handleFilterChange}
            >
              <option default value="">
                All
              </option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Polar">Polar</option>
            </select>
            <button className="btn-web" onClick={handleFilterClick}>
              Apply filter
            </button>
          </div>

{/* ///////////////////////////////////////////////////////////FILTERING ACT
            <div className="dropdown-menu">
            <select
              className="dropdown-options"
              value={filteredAct}
              onChange={handleFilterChangeAct}
            >
              <option default value="">
                All
              </option>
              <option value="autumn">Autumn</option>
              <option value="summer">Summer</option>
              <option value="spring">Spring</option>
              <option value="winter">Winter</option>
            </select>
            <button className="btn-web" onClick={handleFilterClickAct}>
              Apply filter
            </button>
          </div>
//////////////////////////////////////////////////////////// */}
          
          <div className="sorting">
            Sort by
            <button
              className="btn-web"
              type="button"
              onClick={sortyByPopulationAsc}
            >
              Population Asc
            </button>
            <button
              className="btn-web"
              type="button"
              onClick={sortyByPopulationDesc}
            >
              Population Desc
            </button>
            <button className="btn-web" type="button" onClick={sortByNameAsc}>
              Name Asc
            </button>
            <button className="btn-web" type="button" onClick={sortByNameDesc}>
              Name Desc
            </button>
          </div>
        </div>
        <div className="pages-title">
          Pages
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={countriesList.length}
            paginate={paginate}
          />
        </div>
      </div>

      <div className="cards-list">
        {currentCountries?.map((country) => {
          return <Card key={country.name} country={country} />;
        })}
      </div>

      <div>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countriesList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
export default Cards;
