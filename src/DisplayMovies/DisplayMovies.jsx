import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './DisplayMovies.css';
function DisplayMovies({ movies }) {
  const movieList = movies.map((movie, index) => (
    <MovieCard
      title={movie.Title}
      poster={movie.Poster}
      imdbID={movie.imdbID}
      year={movie.Year}
      key={Math.random() * index}
    />
  ));
  return <section className="movie-section">{movieList}</section>;
}
export default DisplayMovies;
