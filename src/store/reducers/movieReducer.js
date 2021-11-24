import { FETCH_GENRES, FETCH_MOVIES, FETCH_MOVIE } from '../action/type';

const initialState = {
  genres: [],
  movies: [],
  movie: {},
};

const itemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GENRES:
      return { ...state, genres: payload };
    case FETCH_MOVIES:
      return { ...state, movies: payload };
    case FETCH_MOVIE:
      return { ...state, movie: payload };
    default:
      return state;
  }
};

export default itemsReducer;
