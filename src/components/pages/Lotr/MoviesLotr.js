import React from 'react'
import {MoviesLotrDatabase} from './MoviesLotrDatabase'

function MoviesLotr() {
  return (
    <>
    <div className="movies-containerLotr">
    <h1>Movies</h1>
    <div className="movies-wrapperLotr">
    <div className="movies-itemsLotr">
      {MoviesLotrDatabase.map(item => (
        <div className="movies-itemLotr" key={item.id}>
        <img src={item.src} alt={item.name}/>
        <div className="movies-item-infoLotr">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        </div>
        </div>
      ))}
      </div>
      </div>
      </div>
      </>
  )
}

export default MoviesLotr