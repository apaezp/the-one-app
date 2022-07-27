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
    <div>
      {character.map((item) => (
        <div className="characters-lotr-box" key={item._id}>
          <img className="characters-lotr-img" src={characterImageLotr} alt="character"></img>
          <p className="nameLotr">{item.name}</p>
          <p className="raceNameLotr">{item.race}</p>
          <p className="genderLotr">{item.gender}</p>
          <p>
            <a className="linkLotr" href={item.wikiUrl}>{item.wikiUrl}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CharactersLotr;
