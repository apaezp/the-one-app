import React from 'react'
import'./HeroSectionLotr.css';
import { Button } from "../../Button";


export default function HeroSectionLotr() {
  return (
  <div className="hero-containerLotr"> 
          
          <h1>“May it be a light to you in dark places, when all other lights go out.”</h1>
          <p>— Galadriel.</p>
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