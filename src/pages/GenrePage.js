import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

const GenrePage = ({ match }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=0d84cce1916332759750a482f018e8fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${match.params.genreId}`
      );
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>{match.params.genreName}</h2>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GenrePage;
