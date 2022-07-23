import React, {useState, useEffect} from 'react'
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
    <div className='container'>
      <div className='characters'>
        {
          character.map(item  => (
            <div className='box' key={character.indexOf(item)}>
                <img src={item.image} alt={item.name}/>
                <div className='character'>
                  <h3 className='name'>{item.name}</h3>
                  <h4 className='birthDay'>{item.dateOfBirth}</h4>
                  <p className='house'>{item.house}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersHp;