import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { fetchMovies } from '../store/action/movie';

const GenrePage = ({ match }) => {
  const { movies } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMovies(match.params.genreId));
    setIsLoading(false);
  }, [dispatch, match.params.genreId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default GenrePage;
