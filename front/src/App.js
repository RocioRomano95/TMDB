import React from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
// import DetailMovies from "./components/DetailMovies";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/detailMovies/:id" element={<DetailMovies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
