import React from "react";
import { MoviesLotrDatabase } from "./MoviesLotrDatabase";
import "./MoviesLotr.css";

function MoviesLotr() {
  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <div className="movies">
        {MoviesLotrDatabase.map((item) => (
          <div className="movie-card" key={item.id}>
            <div className="imgContainer">
              <img className="movieImg" src={item.src} alt={item.name} />
            </div>
            <div className="movieInfo">
              <h3 className="name">{item.name}</h3>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesLotr;
