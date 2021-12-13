import './App.css';
import Home from './components/Home';
import AboutUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';


function App() {
  return (
    <div classNameName="App">
      <Router>
        <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contactus">
            <AboutUs />
          </Route>
        </Switch>  
        </div>
      </Router>
    </div>
  );
}

export default App;
