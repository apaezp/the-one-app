import React from 'react'
import'./HeroSectionGot.css';
import { Button } from "../../Button";


export default function HeroSectionGot() {
  return (
  <div className="hero-containerGot"> 
          
          <h1>"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."</h1>
          <p>— Tyrion Lannister.</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Characters
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}

              // insertar search function
            >
              SEARCH <i className="fa-solid fa-magnifying-glass" />


            </Button>
          </div>
        
      
    </div>
  );
}