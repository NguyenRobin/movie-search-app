import './MovieCard.css';
import React, { useState } from 'react';
function MovieCard({ title, poster, imdbID, year }) {
  // const [imageMovie, setImageMovie] = useState()
  return (
    <article className="movie">
      <img src={poster} alt={imdbID} />
      <h2>{title}</h2>
      <p>{year}</p>
    </article>
  );
}

export default MovieCard;
