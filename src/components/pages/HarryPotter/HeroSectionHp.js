import React from "react";
import "./HeroSectionHp.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";

export default function HeroSectionHp() {
  return (
    <div className="hero-containerHp">
      <h1>
        “We are only as strong as we are united, as weak as we are divided.”
      </h1>
      <p>— Albus Dumbledore.</p>
      <div className="hero-btns">
        <Link to="./CharactersHp" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Characters
          </Button>
        </Link>
        <Link to="./BooksHp" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Books
          </Button>
        </Link>
        <Link to="./MoviesHp" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Movies
          </Button>
        </Link>
        <Link to="./FooterHp" className="btn-mobile">
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
