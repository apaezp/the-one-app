import React from "react";
import "../App.css";
import { Button } from "./Button";
import Video from "./videos/herosection.mp4";
import "./HeroSection.css";


function HeroSection() {
  return (
    <div className="hero-container"> 
    <video src= {Video} autoPlay loop muted />                      
          <h1>“Not all those who wander are lost.”</h1>
          <p>— Bilbo Baggins.</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
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

export default HeroSection;