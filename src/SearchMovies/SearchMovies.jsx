import React, { useState, useEffect } from 'react';
import DisplayMovies from '../DisplayMovies/DisplayMovies';
import './SearchMovies.css';
function SearchMovies() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const API_KEY = '37fe945a';
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

  async function getMovies(movie) {
    try {
      const response = await fetch(`${URL}s=${movie}`);
      if (!response.ok) throw new Error('Problem getting data!⛔️');
      const data = await response.json();
      if (data.Response === 'False') {
        setShowModal(true);
        return;
      }
      console.log(data);
      setMovies(data.Search);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMovies('pippi');
  }, []);

  function onChangeHandler(event) {
    setSearch(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (search.trim() === '' || search.trim().length < 3) {
      setShowModal(true);
      setSearch('');
      return;
    }

    setShowModal(false);
    getMovies(search);
    setSearch('');
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Search movie"
          value={search}
          onChange={onChangeHandler}
        ></input>
        <button type="submit">Search</button>
      </form>

      <DisplayMovies movies={movies} />

      {showModal && (
        <section className="alert-message-section">
          <section>
            <button onClick={() => setShowModal(false)}>Close</button>
            <h2>No movies found! Please try again. 🍿</h2>
            <p>Enter at least 3 characters</p>
          </section>
        </section>
      )}
    </>
  );
}

export default SearchMovies;
