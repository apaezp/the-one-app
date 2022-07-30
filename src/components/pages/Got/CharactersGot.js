import React,{useState, useEffect} from 'react'
import'./CharactersGot.css';
//https://thronesapi.com/api/v2/Characters

const CharactersGot = () => {

  //Estados
  const [character, setCharacter] = useState([])

  useEffect(() => {

    try {

    fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => setCharacter(data.slice(0,12)))

    } catch (error) {
      console.log(error)
    }

  }, [])

  return(
    <div className='CharactersGradientGot'>
    <div className='containerGot'>
      <h1 className='charactersTitleGot'>Characters</h1>
      <div className='charactersGot'>
        {
          character.map(item  => (
            <div className='cardCharacterGot' key={item.id}>
                <div className='imgCardGot'>
                <img className='cardImgGot'src={item.imageUrl} alt={item.fullName}/>
                </div>
                <div className='cardInfoGot'>
                  <h3 className='nameGot'>{item.fullName}</h3>
                  <h4 className='familyGot'>{item.family}</h4>
                  <h4 className='titleGot'>{item.title}</h4>
                </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>

  );
}

export default CharactersGot;