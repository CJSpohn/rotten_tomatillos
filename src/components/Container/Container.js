import React from 'react';
import Movie from '../Movie/Movie.js';
import Details from '../Details/Details.js'
import MovieLoader from '../MovieLoader/MovieLoader.js'

import './Container.css';

const Container = props => {
  if (!props.currentMovie) {
    const movieComponents = props.movies.map((movie, index) => (
      <Movie
        key={index}
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
        updateCurrentMovie={props.updateCurrentMovie}
      />
    ));

    return (
      <main>
        <section className='movie-grid'>
        {props.movies.length ? movieComponents :
          <MovieLoader />}
          </section>
      </main>
    )
  } else {
    return <Details
      currentMovie={props.currentMovie}
      clearCurrentMovie={props.clearCurrentMovie}
    />
  }
}

export default Container;
