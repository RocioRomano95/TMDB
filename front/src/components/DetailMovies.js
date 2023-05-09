import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailMovies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "c494ae6fdb5cf03bf6b4da755f0fda89";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetail = async () => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovieDetail(data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <h2>{movieDetail.title}</h2>
        <img
          src={`${IMAGE_PATH + movieDetail.poster_path}`}
          alt={`peli ${movieDetail.title}`}
        />
        <p> {movieDetail.overview}</p>
        <p> {movieDetail.video}</p>
      </div>
    </div>
  );
};

export default DetailMovies;
