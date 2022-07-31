import React from 'react'
import'./HeroSectionGot.css';
import { Button } from "../../Button";
import { Link } from 'react-router-dom';


export default function HeroSectionGot() {
  return (
    <div className='heroGradient'>
  <div className="hero-containerGot"> 
          
          <h1>"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."</h1>
          <p>— Tyrion Lannister.</p>
          <div className="hero-btns">
          <Link to='./CharactersGot' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Characters
            </Button>
          </Link>
          <Link to='./BooksGot' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Books
            </Button>
            </Link>
            <Link to='./SeriesGot' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              TV Series
            </Button>
            </Link>
            <Link to='./FooterGot' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Quotes
            </Button>
            </Link>
            
          </div>
        
      
    </div>

    </div>
  );
}