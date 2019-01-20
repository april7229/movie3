import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import MovieList from './MovieList';
import PropTypes from 'prop-types';
import MovieDetail from './MovieDetail';
import
{
  BrowerRouter as Router,
  Route,
  Switch,
  Link

} from "react-router-dom";

const App = () =>
{
  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route component={MovieDetail} path='/:id' />
          <Route component={MovieList} exact path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
