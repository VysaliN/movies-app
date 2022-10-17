import React, { useState } from "react";
import "./Movies.css";

const MoviesApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  };

  return (
    <div className="movies">
      <center>
        <form onSubmit={submitHandler}>
          <h1>Movies App</h1>
          <input
            type="text"
            value={search}
            placeholder="search movies "
            onChange={changeHandler}
          />
          &nbsp;
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className="row">
          {data.map((movie) => (
            <div className="col">
              <img
                src={movie.Poster}
                class="card-img-top"
                alt={movie.Title}
                height="200px"
                width="300px"
              />
              <h4 className="card-title">{movie.Title}</h4>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default MoviesApp;
