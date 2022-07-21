import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import HomeGot from "./components/pages/Got/HomeGot";
import HomeLotr from "./components/pages/Lotr/HomeLotr";
import HomeHp from "./components/pages/HarryPotter/HomeHp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="pages/Got/HomeGot" element={<HomeGot />} />

          <Route path="pages/Lotr/HomeLotr" element={<HomeLotr />} />

          <Route path="pages/HarryPotter/HomeHp" element={<HomeHp />} />

          <Route path="pages/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;