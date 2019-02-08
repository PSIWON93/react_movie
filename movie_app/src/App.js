import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title:"Star wars",
    poster: "https://imgc.allpostersimages.com/img/print/u-g-F8G58H0.jpg?w=300&h=450"
  },
  {
    title:"Hunger games",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Mockingjay_Part_2_Poster.jpg"
  }
]

class App extends Component {
  
  static propTypes = {
    title: React.PropTypes.string,
    poster: React.PropTypes.string
  }

  render() {
    return (
      <div className="App">
        {movies.map( (movie, index) => {
          return <Movie title = {movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
