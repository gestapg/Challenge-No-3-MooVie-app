import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=0d84cce1916332759750a482f018e8fe&language=en-US`
      );
      setMovie(data);
    };
    fetchMovie();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
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
