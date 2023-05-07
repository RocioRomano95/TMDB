import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "c494ae6fdb5cf03bf6b4da755f0fda89";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);
  };

  // const handleMovie = () => {
  //   axios.get(`${API_URL /{}}`);
  // };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div class="container">
        <div class="row">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={`${IMAGE_PATH + movie.poster_path}`} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
