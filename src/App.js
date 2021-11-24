import Layouts from './components/Layouts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';

import HomePages from './pages/HomePages';
import GenrePage from './pages/GenrePage';
import MoviePage from './pages/MoviePage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layouts>
          <Container>
            <Route path="/" component={HomePages} exact />
            <Route path="/:genreId/:genreName" component={GenrePage} exact />
            <Route path="/movie/detail/:movieId" component={MoviePage} exact />
          </Container>
        </Layouts>
      </Router>
    </Provider>
  );
};

export default App;
