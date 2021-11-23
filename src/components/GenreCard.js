import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const GenreCard = ({ genre }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/${genre.id}/${genre.name}`}>
        <Card.Img src={`/images/Comedy.jpg`} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title as="div" className="text-center">
          <h4>{genre.name}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GenreCard;
