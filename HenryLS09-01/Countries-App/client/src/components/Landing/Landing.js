import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

function Landing() {
  return (
    <div className="container-landing">
      <div className="landing-div">
        <h1>Welcome to my Countries-App!</h1>
        <p></p>
        <Link to="/home">
          <h2 className="enter-landing">ENTER</h2>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
