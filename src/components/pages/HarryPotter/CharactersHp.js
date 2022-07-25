import React, {useState, useEffect} from 'react'
import './CharactersHp.css'
//http://hp-api.herokuapp.com/api/characters

const CharactersHp = () => {

  //Estados
  const [character, setCharacter] = useState([])

  useEffect(() => {

    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(data => setCharacter(data.slice(0,12)))

  }, [])

  return(
    <div className='hpContainer'>
      <div className='hpCharacters'>
        {
          character.map(item  => (
            <div className='hp-box' key={character.indexOf(item)}>
                <img src={item.image} alt={item.name}/>
                <div className='hpCharacter'>
                  <h3 className='hpName'>{item.name}</h3>
                  <h4 className='hpBirthDay'>{item.dateOfBirth}</h4>
                  <p className='hpHouse'>{item.house}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersHp;