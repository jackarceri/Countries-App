import React, { useState, useEffect } from "react";
import { addActivity, allCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Form.css";

function Form() {
  const countriesList = useSelector((state) => state.allCountries); //Me traigo todos los paises

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "summer", ///hardcodeado
    countries: [],
  });

  const [selectedCountry, setSelectedCountry] = useState("");

  const [countryCache, setCountryCache] = useState([]);

  useEffect(() => {
    dispatch(allCountries()); ////// Lleno mi state con el resultado de la action search All
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); /////watchea input
  };

  const handleCountrySelect = (e) => {
    setSelectedCountry(e.target.value); /////verifico qué país ingreso para agregar
  };

  const handleCountryPush = (e) => {
    e.preventDefault();
    setCountryCache([...countryCache, selectedCountry]);

    console.log("country Cache", countryCache);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const indexes = [];

    for (let i = 0; i < countryCache.length; i++) {
      for (let j = 0; j < countriesList.length; j++) {
        if (countryCache[i] === countriesList[j].name) {
          indexes.push(countriesList[j].id);
        }
      }
    }

    console.log("Countries a Sumar", indexes);

    const output = input;

    output.countries = [...new Set(indexes)];
    dispatch(addActivity(output));
    console.log("output", output);
    setSelectedCountry("");
    setCountryCache([]);
    setInput({
      name: "",
      difficulty: 1,
      duration: 1,
      season: "",
      countries: [],
    });
    alert("Activity added successfuly!");
  };

  return (
    <div className="form-father">
      <h2>Add a new Activity!</h2>
      <div className="form-wrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="input-space"
            required
            type="text"
            placeholder={"Activity title..."}
            name="name"
            value={input.name}
            onChange={handleChange}
            id="input-name"
          />
          <input
            value={selectedCountry}
            required
            placeholder="Countries..."
            type="text"
            list="countries"
            onChange={handleCountrySelect}
          />
          <datalist name="countries" id="countries">
            {countriesList?.map((country) => {
              return <option key={country.id} value={country.name} />;
            })}
           
          </datalist>
          <button className="btn-web" type="button" onClick={handleCountryPush}>
            
            Add Countries
          </button>
          <p>{countryCache}</p>
          <div></div>

          {
            ////////////////////////////////////////////////////////////////////
            <div>
              <div className="numbers">
                <div className="difficulty">
                  <h4>{"Difficulty:"}</h4>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="1"
                    name="difficulty"
                    value={input.difficulty}
                    onChange={handleChange}
                    id="inputDif"
                  />
                  <label>/5</label>
                </div>
                <div className="duration">
                  <h4>{"Duration:"}</h4>
                  <input
                    type="number"
                    placeholder="1"
                    min="1"
                    name="duration"
                    value={input.duration}
                    onChange={handleChange}
                    id="inputDur"
                  />

                  <label>Hours</label>
                </div>

                <div className="dropdown-menu">
                  {" "}
                  Season:
                  <select
                    name="season"
                    id="selectSeason"
                    defaultValue="all"
                    onChange={handleChange}
                  >
                    <option default value="Summer">
                      {" "}
                      Summer
                    </option>
                    <option value="Winter">Winter</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                  </select>
                </div>
              </div>
              <input type="submit" className="btn-web" value={"Add Activity"} />
            </div>

            ////////////////////////////////////////////////////////////////////
          }
        </form>
      </div>
      <h3 className="enter-landing">
        <Link to="/home">Home</Link>
      </h3>
    </div>
  );
}

export default Form;
