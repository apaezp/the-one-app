import React from 'react'
import {SeriesGotDatabase} from './SeriesGotDatabase'
import './SeriesGot.css'


function SeriesGot() {
  return (
    <div className="series-container">
      <h1>TV Series</h1>
      <div className="series">
        {
          SeriesGotDatabase.map((item) => (
            <div className="series-card" key={item.id}>
              <div className="imgContainer">
                <img className="seriesImg" src={item.src} alt={item.name} />
              </div>
              <div className="seriesInfo">
                <h3 className="name">{item.name}</h3>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default SeriesGot