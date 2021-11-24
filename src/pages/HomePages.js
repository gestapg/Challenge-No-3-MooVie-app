import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { fetchGenres } from '../store/action/movie';

import GenreCard from '../components/GenreCard';

const HomePages = () => {
  const { genres } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <>
      <h1>Genre Movies</h1>
      <Row>
        {genres.map(genre => (
          <Col key={genre.id} sm={12} md={6} lg={4} xl={3}>
            <GenreCard genre={genre} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePages;
