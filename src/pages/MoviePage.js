import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import { fetchMovie } from '../store/action/movie';

const MoviePage = ({ match }) => {
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMovie(match.params.movieId));
    setIsLoading(false);
  }, [dispatch, match.params.movieId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fluid
              />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{movie.title}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <span>
                        <i
                          className="fas fa-star"
                          style={{ color: 'yellow' }}
                        ></i>
                      </span>{' '}
                      Rating: {movie.vote_average}/10
                    </Col>
                    <Col>
                      <span>
                        <i className="fas fa-user"></i>
                      </span>{' '}
                      {movie.vote_count} voters
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>Release: {movie.release_date}</ListGroup.Item>
                <ListGroup.Item>
                  Genre:{'   '}
                  {movie.genres
                    ? movie.genres.map(genre => genre.name).join(',  ')
                    : null}
                </ListGroup.Item>
                <ListGroup.Item>
                  Production:{'   '}
                  {movie.production_companies
                    ? movie.production_companies
                        .map(company => company.name)
                        .join(',  ')
                    : null}
                </ListGroup.Item>
                <ListGroup.Item>Description: {movie.overview}</ListGroup.Item>
                <ListGroup.Item>
                  <a href={`${movie.homepage}`}>
                    <Button
                      className="btn-primary w-100"
                      disabled={!movie.homepage ? 'disabled' : ''}
                    >
                      Link To Watch
                    </Button>
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MoviePage;
