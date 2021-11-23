import Layouts from './components/Layouts';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GenreCard from './components/GenreCard';

const App = () => {
  return (
    <Router>
      <Layouts>
        <Route path="/" component={GenreCard} exact />
      </Layouts>
    </Router>
  );
};

export default App;
