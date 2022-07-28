import React from "react";
import { MoviesLotrDatabase } from "./MoviesLotrDatabase";
import "./MoviesLotr.css";

function MoviesLotr() {
  return (
    <div className="movieContainerLotr">
      <h1>Movies</h1>
      <div className="moviesLotr">
        {MoviesLotrDatabase.map((item) => (
          <div className="cardMoviesLotr" key={item.id}>
            <div className="imgMovieContainer">
              <img className="imgMovie" src={item.src} alt={item.name} />
            </div>
            <div className="movieInfoLotr">
              <h3 className="nameMovieLotr">{item.name}</h3>
              <p className="descriptionMovieLotr">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesLotr;
