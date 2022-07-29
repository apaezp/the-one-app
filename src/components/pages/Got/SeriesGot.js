import React from "react";
import { SeriesGotDatabase } from "./SeriesGotDatabase";
import "./SeriesGot.css";

const SeriesGot = () => {
  return (
    <div className="movieContainerGot">
      <h1 className="moviesTitleGot">TV Series</h1>
      <div className="moviesGot">
        {SeriesGotDatabase.map((item) => (
          <div className="cardMoviesGot" key={item.id}>
            <div className="imgMovieContainerGot">
              <img className="imgMovieGot" src={item.src} alt={item.name} />
            </div>
            <div className="movieInfoGot">
              <h3 className="nameMovieGot">{item.name}</h3>
              <p className="descriptionMovieGot">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesGot;
