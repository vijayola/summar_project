import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './Screens/landingPage';
import About from './Screens/about';
import Signup from './Screens/signUp';
import Login from './Screens/login';
import Profile from './Screens/profile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <switch>
          <Route path="/" exact component={LandingPage}></Route>
        </switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
