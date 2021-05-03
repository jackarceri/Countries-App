import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";

function Card(props) {
  const {
    country: { id, name, flag, continent },
  } = props;

  return (
    <div>
    <Link to={`/detail/${id}`}>
    <div className="invisible-hover">
      <div className="card-wrapper">
        <div className="card-flag">
          <img src={flag} alt={name} />
        </div>
        <h4 className="card-name">{name}</h4>
        <h5 className="card-continent">Continent: {continent}</h5>
      </div>
    </div>
    </Link>
    </div>
  );
}

export default Card;
