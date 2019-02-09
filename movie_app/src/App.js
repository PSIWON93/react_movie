import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  state = {
    greeting: 'Hello!',
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
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
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title = {movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
        
      </div>
    );
  }
}

function MoviePoster ({poster}){
  return (
    <img src={poster} alt="Movie Poster"/>
  )
}


export default App;
