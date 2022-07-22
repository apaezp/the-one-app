import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import HomeGot from "./components/pages/Got/HomeGot";
import HomeLotr from "./components/pages/Lotr/HomeLotr";
import HomeHp from "./components/pages/HarryPotter/HomeHp";
import Cards from "./components/Cards";
import CharactersGot from "./components/pages/Got/CharactersGot";
import BooksGot from "./components/pages/Got/BooksGot";
import SeriesGot from "./components/pages/Got/SeriesGot";
import Search from "./components/Search";
import CharactersHp from "./components/pages/HarryPotter/CharactersHp";
import BooksHp from "./components/pages/HarryPotter/BooksHp";
import MoviesHp from "./components/pages/HarryPotter/MoviesHp";
import CharactersLotr from "./components/pages/Lotr/CharactersLotr";
import BooksLotr from "./components/pages/Lotr/BooksLotr";
import MoviesLotr from "./components/pages/Lotr/MoviesLotr";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/Cards" element={<Cards />} />

          <Route path="/Search" element={<Search />} />

          <Route path="pages/Got/HomeGot" element={<HomeGot />} />

          <Route path="pages/Lotr/HomeLotr" element={<HomeLotr />} />

          <Route path="pages/HarryPotter/HomeHp" element={<HomeHp />} />

          <Route path="pages/SignUp" element={<SignUp />} />

          <Route path="pages/Got/HomeGot/CharactersGot" element={<CharactersGot />} />

          <Route path="pages/Got/HomeGot/BooksGot" element={<BooksGot />} />

          <Route path="pages/Got/HomeGot/SeriesGot" element={<SeriesGot />} />

          <Route path="pages/HarryPotter/HomeHp/CharactersHp" element={<CharactersHp />} />

          <Route path="pages/HarryPotter/HomeHp/BooksHp" element={<BooksHp />} />

          <Route path="pages/HarryPotter/HomeHp/MoviesHp" element={<MoviesHp />} />

          <Route path="pages/Lotr/HomeLotr/CharactersLotr" element={<CharactersLotr />} />

          <Route path="pages/Lotr/HomeLotr/BooksLotr" element={<BooksLotr />} />

          <Route path="pages/Lotr/HomeLotr/MoviesLotr" element={<MoviesLotr />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;