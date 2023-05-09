import React from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import DetailMovies from "./components/DetailMovies";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/detailMovies/:id" element={<DetailMovies />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
