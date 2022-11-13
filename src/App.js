import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Movies } from "./components/Movies";
import { MovieInfo } from "./components/MovieInfo";
import { useState } from "react";
import { 
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
      useHistory
} from 'react-router-dom';
import { Login } from "./components/Login";

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
