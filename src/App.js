import React, { Component } from 'react';
import Movie from './movie'
import logo from './logo.svg';
import './App.css';

const movies = [
  {
  id: 1,
  title: 'Star Wars'
  }, {
  id: 2,
  title: 'Spiderman'
  }, {
  id: 3,
  title: '36th Chamber of Shaolin'
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
