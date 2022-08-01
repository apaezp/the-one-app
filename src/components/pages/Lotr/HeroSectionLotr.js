import React from 'react'
import'./HeroSectionLotr.css';
import { Button } from "../../Button";
import { Link } from 'react-router-dom';


export default function HeroSectionLotr() {
  return (
  <div className="hero-containerLotr"> 
          
          <h1>“May it be a light to you in dark places, when all other lights go out.”</h1>
          <p className='characterHeroLotr'>— Galadriel.</p>
          <div className="hero-btns">
          <Link to='./CharactersLotr' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Characters
            </Button>
          </Link>
          <Link to='./BooksLotr' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Books
            </Button>
            </Link>
            <Link to='./MoviesLotr' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Movies
            </Button>
            </Link>
            <Link to='./FooterLotr' className='btn-mobile'>
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
  );
}