import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navi-bar">
      <h1 className="title-web">Countries App</h1>
      <SearchBar />
      <ul>
        <Link to="/activity">
        <li className="enter-landing">Add Activity</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
