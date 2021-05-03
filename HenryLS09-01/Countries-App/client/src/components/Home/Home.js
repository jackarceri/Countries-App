import React from "react";
import Cards from "../Cards/Cards";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h2 className="title-web">All the countries</h2>
      <Cards />

      <footer className="footer">
        Developed by Mauro Arceri for Henry Labs
      </footer>
    </div>
  );
}
export default Home;
