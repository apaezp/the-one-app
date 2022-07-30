import React, { useEffect, useState } from "react";
import "./Search.css";


const Search = () => {
//   const [name, setName] = useState([]);
//   const [character, setCharacter] = useState([]);
//   let result=[];

// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name)


//   };

//   useEffect(() => {
//     fetch("https://thronesapi.com/api/v2/Characters")
//     .then(response => response.json())
//     .then(data => setCharacter(data) ) 

//  }, [])


 
  return (
    <div className="mainContainer">
      {/* <h1 className="titleBuscador">Buscar por nombre</h1>
      <div className="containerBuscador">
        <form onSubmit={handleSubmit}>
          <label>
            Ingresa un nombre:
            <input value={name} onChange={(e) => setName(e.target.value)} type="text"></input>
          </label>
          <input type="submit"></input>
        </form>
      </div>
      {

      
         result = character.filter((character) => {
            if(character.firstName == name){
              return (
              <div className="cardContainerSearch" key={result.id} >
            <img className="cardImageSearch" src={result.imageUrl}></img>
          </div>
                
              )
            }}
          
        )
      

      } */}
      </div>
    
  );
  
};
export default Search;
