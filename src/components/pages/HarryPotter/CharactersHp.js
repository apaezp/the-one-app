import React, {useState, useEffect} from 'react'
import './CharactersHp.css'
import charactersBd from './characters.json'
//http://hp-api.herokuapp.com/api/characters

const CharactersHp = () => {

  //Estados
  const [character, setCharacter] = useState([])

  useEffect(() => {
    
    try {

    // fetch("https://hp-api.herokuapp.com/api/characters")
    // .then(response => response.json())
    // .then(data => setCharacter(data.slice(0,12)))
    setCharacter(charactersBd.slice(0,12))
      

    } catch (error) {
      console.log(error)
    }

  }, [])

  return(
    <div className='containerHp'>
      <h1 className="charactersTitleHp">Characters</h1>
      <div className='charactersHp'>
        {
          character.map(item  => (
            <div className='cardCharacterHp' key={character.indexOf(item)}>
                <div className='imgCardHp'>
                <img className='cardImgHp' src={item.image} alt={item.name}/>
                </div>
                <div className='cardInfoHp'>
                  <h3 className='nameHp'>{item.name}</h3>
                  <h4 className='birthdayHp'>Birthday: {item.dateOfBirth}</h4>
                  <h4 className='houseHp'>House: {item.house}</h4>
                  <h4 className='actorHp'>Portrayed by: {item.actor}</h4>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersHp;