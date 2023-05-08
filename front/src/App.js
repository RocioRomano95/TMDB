import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
      <Header />
      <Link to="/movie" element={Movies}></Link>
    </div>
  );
}

export default App;
