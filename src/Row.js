import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Row({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.resutls);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          <img src={movie.poster_path} alt={movie.name} />;
        })}
      </div>
    </div>
  );
}
