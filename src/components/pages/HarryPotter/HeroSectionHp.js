import React from 'react'
import'./HeroSectionHp.css';
import { Button } from "../../Button";


export default function HeroSectionHp() {
  return (
  <div className="hero-containerHp"> 
          
          <h1>“We are only as strong as we are united, as weak as we are divided.”</h1>
          <p>— Albus Dumbledore.</p>
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
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Books
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Movies
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