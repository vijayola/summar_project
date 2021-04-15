import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './Screens/landingPage';
import About from './Screens/about';
import IndividualSignup from './Screens/individualSignUp';
import IndividualLogin from './Screens/individualLogin';
import IndividualProfile from './Screens/individualProfile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/individual-login" exact component={IndividualLogin}></Route>
          <Route path="/individual-profile" exact component={IndividualProfile}></Route>
          <Route path="/individual-signup" exact component={IndividualSignup}></Route>
          <Route path="/about" exact component={About}></Route>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
