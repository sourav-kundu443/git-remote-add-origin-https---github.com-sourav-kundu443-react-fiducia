import React from 'react';
import './App.css';
import Home from './components/Home';
import ContactUs from './components/sub components/ContactUs';
import AboutUs from './components/sub components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
              <ContactUs />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
