import React, {useState, useEffect} from 'react'
import movie1 from './img/hp-movie-1.jpg'
import movie2 from './img/hp-movie-2.jpg'
import movie3 from './img/hp-movie-3.jpg'
import movie4 from './img/hp-movie-4.jpg'
import movie5 from './img/hp-movie-5.jpg'
import movie6 from './img/hp-movie-6.jpg'
import movie7 from './img/hp-movie-7.jpg'
import movie8 from './img/hp-movie-8.jpg'
import './MoviesHp.css'

const arrayMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8 ]


const  MoviesHp = () => {

  //Estados
  const [movie, setMovie] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const rawMovies = await fetch('https://harry-potter-api-production.up.railway.app/libros')
      const movie = await rawMovies.json();
      setMovie(movie)
      console.log(movie)
      setImg(arrayMovies)
    }
    fetchData()

  }, [])

  return (
    <div className="movies-container">
        <h1 className="moviesHpTitle">Movies</h1>
          <div className="movies">
            {
            movie.map((item) => (
              <div className="movie-card" key={item.id}>
                <div className="imgContainer">
                  <img className="movieImg" src={img[movie.indexOf(item)]} alt={item.titulo_original} />
                </div>
                <div className="movieInfo">
                  <h3 className="name">{item.titulo_original}</h3>
                  <p className="description"><strong></strong>{item.descripcion}</p>
                </div>
              </div>
            ))
            }
          </div>
      </div>
  )
}

export default MoviesHp