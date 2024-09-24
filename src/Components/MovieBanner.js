import React from 'react';
import './MovieBanner.css'; 
import { Container } from 'react-bootstrap';

function MovieBanner  ()  {
  return (
    <Container>
      <div 
        className="banner-section" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg')" }}
      >
        <div className="banner-content">
          <h1>Welcome to Your Website</h1>
          <p>Discover movies, web series, and more</p>
          <div className="hero-buttons">
            <button className="btn">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MovieBanner;
