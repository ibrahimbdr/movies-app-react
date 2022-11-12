import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Movies } from "./components/Movies";
import { MovieInfo } from "./components/MovieInfo";
import { 
      BrowserRouter as Router,
      Switch,
      Route
} from 'react-router-dom';
import { Search } from "./components/Search";

function App() {
  
  return (
    <div className="App">
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/:id' exact component={MovieInfo} />
          <Route path='/search' exact component={Search} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Switch>
      </Router>
      <Footer />
      </>
    </div>
  );
}

export default App;
