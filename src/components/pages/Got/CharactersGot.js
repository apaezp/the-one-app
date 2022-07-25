import React,{useState, useEffect} from 'react'
import'./CharactersGot.css';
//https://thronesapi.com/api/v2/Characters

const CharactersGot = () => {

  //Estados
  const [character, setCharacter] = useState([])

  useEffect(() => {

    fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => setCharacter(data.slice(0,12)))

  }, [])

  return(
    <div className='characters-container'>
      
      <div className='gotCharacters'>
        {
          character.map(item  => (
            <div className='box' key={item.id}>
                <img src={item.imageUrl} alt={item.fullName}/>
                <div className='gotCharacter'>
                  <h3 className='gotName'>{item.fullName}</h3>
                  <h4 className='gotFamily'>{item.family}</h4>
                  <p className='gotTitle'>{item.title}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersGot;