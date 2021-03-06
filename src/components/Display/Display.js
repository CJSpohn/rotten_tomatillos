import React from 'react';
import Movie from '../Movie/Movie.js';
import Details from '../Details/Details.js'
import { ErrorMsg } from '../ErrorMsg/ErrorMsg.js';
import MovieLoader from '../MovieLoader/MovieLoader.js'
import SearchBar from '../SearchBar/SearchBar.js';
import NoResults from '../NoResults/NoResults.js'
import './Display.css';

const Display = props => {
  if (props.error) {
    return <ErrorMsg />;
  }

  if (!props.currentMovie) {
    const moviesToDisplay = props.search ?
      props.movies.filter(movie => movie.title.toLowerCase().includes(props.search.toLowerCase()))
      : props.movies

    const movieComponents = moviesToDisplay.map((movie, index) => (
      <Movie
        key={index}
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
      />
    ));
    const loadingComponents = [<MovieLoader key={0}/>,
        <MovieLoader key={1}/>,
        <MovieLoader key={2}/>,
        <MovieLoader key={4}/>]

    const movieRender = movieComponents.length ? movieComponents : <NoResults />;

    const itemsToRender = props.movies.length ? movieRender : loadingComponents;

    return (
      <main>
        <SearchBar search={props.search} updateSearch={props.updateSearch}/>
        <section className='movie-grid'>
          {itemsToRender}
        </section>
      </main>
    )
  } else {
    return <Details
      currentMovie={props.currentMovie}
    />
  }
}

export default Display;
