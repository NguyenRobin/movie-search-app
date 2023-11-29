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
  return <ul className="movie-section">{movieList}</ul>;
}
export default DisplayMovies;
