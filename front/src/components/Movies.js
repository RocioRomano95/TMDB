import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "c494ae6fdb5cf03bf6b4da755f0fda89";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "Cargando peliculas..." });
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const tipo = searchKey ? "multi" : "movie";

    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/${tipo}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    console.log("MoviesOrTVShows", results);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const handleClick = (movie) => {
    setMovie(movie);
  };

  const onChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h2>Movies & TV </h2>
      <form className="container" onSubmit={searchMovies}>
        <input type="text" placeholder="Buscar" onChange={onChange} />
        <button>Buscar</button>
      </form>
      <div class="container mt-2">
        <div class="row ">
          {movies.map((movie) => (
            <Link to={`/detailMovies/${movie.id}}`}>
              <div key={movie.id} className="col-md-4">
                <img
                  src={`${IMAGE_PATH + movie.poster_path}`}
                  alt=""
                  height={600}
                  width="100%"
                  onClick={() => {
                    handleClick(movie);
                  }}
                />
                <h3>{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
