import React from "react";
import "../App.css";
import { Button } from "./Button";
import Video from "./videos/herosection.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";



function HeroSection() {
  return (
    <div className="hero-container"> 
    <video src= {Video} autoPlay loop muted />                      
          <h1>“Not all those who wander are lost.”</h1>
          <p>— Bilbo Baggins.</p>
          <div className="hero-btns">
          <Link to='./Cards'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              // onClick={console.log("hey")}
            >
              GET STARTED
            </Button>
          </Link>
            
          </div>
        
      
    </div>
  );
}

export default HeroSection;