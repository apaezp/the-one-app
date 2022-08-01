import React from "react";
import ScrollToTop from './components/ScrollToTop';



import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import HomeGot from "./components/pages/Got/HomeGot";
import HomeLotr from "./components/pages/Lotr/HomeLotr";
import HomeHp from "./components/pages/HarryPotter/HomeHp";
import Cards from "./components/Cards";
import CharactersGot from "./components/pages/Got/CharactersGot";
import BooksGot from "./components/pages/Got/BooksGot";
import SeriesGot from "./components/pages/Got/SeriesGot";
import FooterGot from "./components/pages/Got/FooterGot";

import CharactersHp from "./components/pages/HarryPotter/CharactersHp";
import FooterHp from "./components/pages/HarryPotter/FooterHp";
import BooksHp from "./components/pages/HarryPotter/BooksHp";
import MoviesHp from "./components/pages/HarryPotter/MoviesHp";
import CharactersLotr from "./components/pages/Lotr/CharactersLotr";
import BooksLotr from "./components/pages/Lotr/BooksLotr";
import MoviesLotr from "./components/pages/Lotr/MoviesLotr";
import FooterLotr from "./components/pages/Lotr/FooterLotr";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />

          <Routes>
          <Route path='/' element={<Home />} /> 

          <Route path="/Cards" element={<Cards />} />

          <Route path="pages/Got/HomeGot" element={<HomeGot />} />

          <Route path="pages/Lotr/HomeLotr" element={<HomeLotr />} />

          <Route path="pages/HarryPotter/HomeHp" element={<HomeHp />} />

          <Route path="pages/SignUp" element={<SignUp />} />

          <Route path="pages/Got/HomeGot/CharactersGot" element={<CharactersGot />} />

          <Route path="pages/Got/HomeGot/BooksGot" element={<BooksGot />} />

          <Route path="pages/Got/HomeGot/SeriesGot" element={<SeriesGot />} />

          <Route path="pages/Got/HomeGot/FooterGot" element={<FooterGot />} />

          <Route path="pages/HarryPotter/HomeHp/CharactersHp" element={<CharactersHp />} />

          <Route path="pages/HarryPotter/HomeHp/BooksHp" element={<BooksHp />} />

          <Route path="pages/HarryPotter/HomeHp/MoviesHp" element={<MoviesHp />} />

          <Route path="pages/HarryPotter/HomeHp/FooterHp" element={<FooterHp />} />

          <Route path="pages/Lotr/HomeLotr/CharactersLotr" element={<CharactersLotr />} />

          <Route path="pages/Lotr/HomeLotr/BooksLotr" element={<BooksLotr />} />

          <Route path="pages/Lotr/HomeLotr/MoviesLotr" element={<MoviesLotr />} />

          <Route path="pages/Lotr/HomeLotr/FooterLotr" element={<FooterLotr />} />
          </Routes>
          </BrowserRouter>
      
    </>
  );
}

export default App;