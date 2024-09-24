import { useState, useEffect } from "react";
import axios from "axios";
import './TvShowCards.css';
import { Container, Button, Modal } from "react-bootstrap";




function TvShowCards() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const API_KEY = 'c848f0d8'; 
  const BASE_URL = 'https://www.omdbapi.com';

  async function fetchMovies() {
    try {
      let response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=episode`);
      const movieData = response.data.Search;
      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching the movies", error);
    }
  }

  async function fetchMovieDetails(imdbID) {
    try {
      let response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
      return response.data; 
    } catch (error) {
      console.error("Error fetching movie details", error);
      return null;
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleShowModal = async (movie) => {
    const movieDetails = await fetchMovieDetails(movie.imdbID);
    if (movieDetails) {
      setSelectedMovie(movieDetails); 
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie({});
  };

  return (
    <>
      <Container style={{ marginTop: 50 }}>
        <div>
          <h3 style={{ color: 'blue' }}>Tv show</h3>
        </div>
        <div className="movie-list">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="movie-card"
                onClick={() => handleShowModal(movie)} 
              >
                <div className="movie-card-image">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-card-info">
                  <p>🎬 show</p>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
        <Container> 
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedMovie.Poster}
                alt={selectedMovie.Title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <hr />
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Type:</strong> {selectedMovie.Type}</p>
              <p><strong>Description:</strong> {selectedMovie.Plot}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Container>
    </>
    );
  }
  
  export default TvShowCards;
  