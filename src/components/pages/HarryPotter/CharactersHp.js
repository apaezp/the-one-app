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
    <div className='Hpcontainer'>
      <div className='Hpcharacters'>
        {
          character.map(item  => (
            <div className='Hpbox' key={character.indexOf(item)}>
                <img src={item.image} alt={item.name}/>
                <div className='HpCharacter'>
                  <h3 className='HpName'>{item.name}</h3>
                  <h4 className='HpBirthDay'>{item.dateOfBirth}</h4>
                  <p className='HpHouse'>{item.house}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersHp;