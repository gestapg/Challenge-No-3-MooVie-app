import Layouts from './components/Layouts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePages from './pages/HomePages';
import GenrePage from './pages/GenrePage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <Router>
      <Layouts>
        <Container>
          <Route path="/" component={HomePages} exact />
          <Route path="/:genreId/:genreName" component={GenrePage} exact />
          <Route path="/:movieId" component={MoviePage} exact />
        </Container>
      </Layouts>
    </Router>
  );
};

export default App;
