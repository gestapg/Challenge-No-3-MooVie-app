import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import movieReducer from './reducers/movieReducer';

const store = createStore(
  combineReducers({
    movieReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
