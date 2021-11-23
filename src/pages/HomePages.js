import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import GenreCard from '../components/GenreCard';

const HomePages = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=0d84cce1916332759750a482f018e8fe&language=en-US'
      );
      const filtered = data.genres.filter(
        genre => genre.name !== 'Documentary'
      );

      setGenres(filtered);
    };
    fetchGenres();
  }, []);

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
