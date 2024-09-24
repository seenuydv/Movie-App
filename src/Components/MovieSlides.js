import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './MovieSlides.css';
import { Container } from 'react-bootstrap';

const MovieSlides = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = 'c848f0d8';
  const BASE_URL = 'https://www.omdbapi.com';

  async function fetchMovies() {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=movies`); 
      const movieData = response.data.Search;
      console.log(movieData);
      setMovies(movieData);
    } catch (error) {
      console.error('Error fetching the movies', error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container style={{ marginTop: 50 }}>
      <h3 style={{ color: 'blue' }}>Trending Movies</h3>
      <Slider {...settings}>
        {movies && movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.Title}
              style={{ width: '100%', height: 'auto' }}
            />
            <p style={{ textAlign: 'center' }}>{movie.Title}</p>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default MovieSlides;

