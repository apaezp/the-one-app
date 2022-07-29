import React from "react";
import { MoviesLotrDatabase } from "./MoviesLotrDatabase";
import "./MoviesLotr.css";

function MoviesLotr() {
  return (
    <div className="movieContainerLotr">
      <h1 className="moviesTitleLotr">Movies</h1>
      <div className="moviesLotr">
        {MoviesLotrDatabase.map((item) => (
          <div className="cardMoviesLotr" key={item.id}>
            <div className="imgMovieContainerLotr">
              <img className="imgMovieLotr" src={item.src} alt={item.name} />
            </div>
            <div className="movieInfoLotr">
              <h2 className="nameMovieLotr">{item.name}</h2>
              <p className="descriptionMovieLotr">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesLotr;
