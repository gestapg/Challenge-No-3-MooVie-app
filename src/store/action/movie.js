import { FETCH_GENRES, FETCH_MOVIES, FETCH_MOVIE } from './type';
import axios from 'axios';

export const fetchGenres = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=0d84cce1916332759750a482f018e8fe&language=en-US'
      );

      const filtered = data.genres.filter(
        genre => genre.name !== 'Documentary'
      );

      dispatch({ type: FETCH_GENRES, payload: filtered });
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchMovies = genreId => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=0d84cce1916332759750a482f018e8fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    );

    dispatch({ type: FETCH_MOVIES, payload: data.results });
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovie = movieId => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0d84cce1916332759750a482f018e8fe&language=en-US`
    );

    dispatch({ type: FETCH_MOVIE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
