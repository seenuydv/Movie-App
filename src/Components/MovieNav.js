import React from 'react';
import './MovieNav.css'; 

function MovieNav  (){
  return (
  <>
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="" alt="" />
        </div>
        <ul className="navbar-menu">
          <li>Movies</li> 
          <li></li>
        </ul>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="Everything" className="navbar-search" />
        <button className="navbar-search-btn">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>
      <div>
        <button className="navbar-login">LOG IN</button>
      </div>
    </div>
    </>
  );
};

export default MovieNav;