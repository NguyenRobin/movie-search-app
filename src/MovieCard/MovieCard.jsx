import './MovieCard.css';

function MovieCard({ title, poster, imdbID, year }) {
  return (
    <article className="movie" data-testid="movie">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
    </article>
  );
}

export default MovieCard;
