import React from 'react'
import "./FooterLotr.css";
import {useState, useEffect}  from 'react'


const FooterLotr = () => {

  //Estados
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    try {

    
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer nr9mUBiPDHSvg418q-zm'
    }
    const fetchData = async () => {
      const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
      })
      const quotes = await rawQuotes.json();
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.dialog)
      
      const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, {headers: headers})
      const characters = await rawCharacters.json();
      const character = characters.docs[0]
      setCharacter(character.name)

      const rawMovies = await fetch ('https://the-one-api.dev/v2/movie?_id=' + quote.movie, {headers: headers})
      const movies = await rawMovies.json();
      const movie = movies.docs[0]
      setMovie(movie.name)

      console.log(movie.name)
      console.log(quote.dialog)
      console.log(character.name)
     
    }
    fetchData();

    } catch (error) {
      console.log(error)
    }

    
  }, [])
  return (
    <div className="footerLotr-container">
      <section className="footerLotr-quote">
        <p className="footerLotr-quote-text">"{quote}"</p>
        <p className="footerLotr-quote-author">-- {character}.</p>
        <p className=''>{movie}</p>
      </section>

      <div className="footerLotr-rights">
        <p>© 2022 TheOne. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterLotr