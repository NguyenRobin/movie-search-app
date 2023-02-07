import React, { useState } from 'react';

import './SearchMovies.css';
function SearchMovies({ getData }) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  function onChangeHandler(event) {
    // console.log(event.target.value);
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
    getData(search);
    setSearch('');
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Search movie"
          value={search}
          // value={search}
          onChange={onChangeHandler}
        ></input>
        <button type="submit">Search</button>
      </form>
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
