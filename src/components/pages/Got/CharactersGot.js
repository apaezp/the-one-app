import React,{useState, useEffect} from 'react'
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
    <div className='container'>
      <div className='characters'>
        {
          character.map(item  => (
            <div className='box' key={item.id}>
                <img src={item.imageUrl} alt={item.fullName}/>
                <div className='character'>
                  <h3 className='name'>{item.fullName}</h3>
                  <h4 className='family'>{item.family}</h4>
                  <p className='title'>{item.title}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CharactersGot;