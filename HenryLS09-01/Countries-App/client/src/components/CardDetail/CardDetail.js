import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countryDetail } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import "./CardDetail.css";

//require name, flag, continent

//: { id, name, flag, continent, subRegion, capital, area, population },
//  activities: { id, name, difficulty, duration, season }

function CardDetail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.countryDetail);
  const params = useParams();
  useEffect(() => {
    dispatch(countryDetail(params.id));
    console.log("useEffect");
  }, []);

  const {
    id,
    name,
    flag,
    continent,
    subRegion,
    area,
    population,
    Activities,
  } = detail;

  return (
    <div>
      <div>
        <div className="card-detail">
          <div className="detail-flag">
            <img className="img-flag" src={flag} alt={name} />
          </div>
          <div className="detail-container">
            <h2 className="detail-name">{name}</h2>
            <h3 className="detail-data">Continent: {continent}</h3>
            <h3 className="detail-data">ID: {id}</h3>
            <h3 className="detail-data">Sub-Region: {subRegion}</h3>
            <h3 className="detail-data">
              Area: {area?.split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")} Square
              Kms
            </h3>
            <h3 className="detail-data">
              Population:  
              {population
                ?.toString()
                .split(/(?=(?:\d{3})+(?:\.|$))/g)
                .join(",")}{" "}
              hab.
            </h3>
          </div>
          <div className="detail-data">
            <h4>
              {" "}
             
              <ul className="activities-detail"> Activities:
                {!Activities ? <p>No activities were added yet</p> : Activities?.map((activity) => (
                  <li key={activity.Id} className="act-container">
                    <li><span>Title: {activity.name}</span></li>
                    <li><span>Duration:  {activity.duration} hours</span></li>
                    <li><span>Difficulty: {activity.difficulty} / 5</span></li>
                    <li><span>Season: {activity.season} </span></li>
                  </li>
                ))}
              </ul>
              <div className="go-back">
        <h3 className="btn-web"><Link to="/home">Go Back</Link></h3>
      </div>
            </h4>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CardDetail;
