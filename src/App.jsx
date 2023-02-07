import { useState, useEffect } from 'react';
import SearchMovies from './SearchMovies/SearchMovies';
import DisplayMovies from './DisplayMovies/DisplayMovies';
import './App.css';
function App() {
  const API_KEY = '37fe945a';
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
  const [movies, setMovies] = useState([]);
  const [showDataResponse, setShowDataResponse] = useState(false);

  async function getData(movieTitle) {
    try {
      const response = await fetch(`${URL}s=${movieTitle}`);
      if (!response.ok) throw new Error('Problem getting data!⛔️');
      const data = await response.json();
      if (data.Response === 'False') {
        setShowDataResponse(true);
        return;
      }

      // console.log(data);
      setMovies(data.Search);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
    // console.log(movies);
  }, []);

  return (
    <div className="App">
      <SearchMovies getData={getData} />
      <DisplayMovies movies={movies} />

      {showDataResponse && (
        <section className="alert-message-section">
          <section>
            <button onClick={() => setShowDataResponse(false)}>Close</button>
            <h2>No movies found! Please try again. 🍿</h2>
            <p>Enter at least 3 characters</p>
          </section>
        </section>
      )}
    </div>
  );
}

export default App;
