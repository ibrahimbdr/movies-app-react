import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Movies } from "./pages/Movies";
import { MovieInfo } from "./pages/MovieInfo";
import { FavMovies } from "./pages/FavMovies";
import { useState } from "react";
import { 
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
      useHistory
} from 'react-router-dom';
import { Login } from "./pages/Login";

function App() {
  const goto = useHistory()
  const [auth, isAuth] = useState(false)
  function protectedRoute() {
    if(auth){
      return goto.push('/movies')
    }else {
      alert("Please login first")
      return goto.push('/login')
    }
  }
  
  return (
    <div className="App">
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/:id' exact component={MovieInfo} />
          <Route path='/favmovies' exact component={FavMovies} />
          <Route path='/login' exact component={Login} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Switch>
      </Router>
      <Footer />
      </>
    </div>
  );
}

export default App;
