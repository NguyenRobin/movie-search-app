import { useState, useEffect } from 'react';
import SearchMovies from './SearchMovies/SearchMovies';
import DisplayMovies from './DisplayMovies/DisplayMovies';
import './App.css';
function App() {
  const API_KEY = '37fe945a';
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
  const [movies, setMovies] = useState([]);

  async function getData(movieTitle) {
    try {
      const response = await fetch(`${URL}s=${movieTitle}`);
      if (!response.ok) throw new Error('Problem getting data!⛔️');
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // Need to call it with otherwise  when site loads
    getData();
    // console.log(movies);
  }, []);
  // console.log(movies);
  return (
    <div className="App">
      <SearchMovies getData={getData} />
      <DisplayMovies movies={movies} />
    </div>
  );
}

export default App;
