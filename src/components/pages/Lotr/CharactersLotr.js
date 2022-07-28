import React from "react";
import { useState, useEffect } from "react";
import "./CharactersLotr.css";
import characterImageLotr from "./img/character-cover.jpg"
//http://hp-api.herokuapp.com/api/characters

const CharactersLotr = () => {
  //Estados
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer nr9mUBiPDHSvg418q-zm",
    };

    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        {
          headers: headers,
        }
      );
      const characters = await rawCharacters.json();
      const shuffled = characters.docs.sort(() => 0.5 - Math.random());
      const character = shuffled.slice(0, 20);
      setCharacter(character);
      console.log(character);
    };
    fetchData();
  }, []);

  return (
    <div className='containerLotr'>
      <h1 className="charactersTitle">Characters</h1>
    <div className="charactersLotr">
      {
      character.map((item) => (
        <div className="cardCharactersLotr" key={item._id}>
          <div className="imgCardLotr">
          <img className="cardImgLotr" src={characterImageLotr} alt="character"></img>
          </div>
          <div className="cardInfoLotr">
          <h3 className="nameLotr">{item.name}</h3>
          <h4 className="raceLotr">{item.race}</h4>
          <h4 className="genderLotr">{item.gender}</h4>
          </div>
          {/* <p>
            <a className="linkLotr" href={item.wikiUrl}>{item.wikiUrl}</a>
          </p> */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default CharactersLotr;
