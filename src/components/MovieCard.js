import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/movie/detail/${movie.id}`}>
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          variant="top"
          className="h-75"
        />
      </Link>
      <Card.Body>
        <Card.Title as="h6" className="text-center">
          <strong>{movie.title}</strong>
        </Card.Title>
        <hr />
        <Card.Text as="div">
          Ratings: {movie.vote_average}/10 - {movie.vote_count} voters
        </Card.Text>
        <Card.Text as="div">Release: {movie.release_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
