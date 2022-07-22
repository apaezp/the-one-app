import React from 'react'
import HeroSectionHp from './HeroSectionHp';
import CharactersHp from './CharactersHp';
import FooterHp from './FooterHp';
import BooksHp from './BooksHp';
import MoviesHp from './MoviesHp';

function HomeHp() {
  return (
    <>
      <HeroSectionHp />
      <CharactersHp /> 
      <BooksHp />
      <MoviesHp />
      <FooterHp />
    </>
  );
}
export default HomeHp