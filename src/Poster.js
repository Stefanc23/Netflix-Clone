import React from "react";
import "./Poster.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Poster({movie, handleClick, isLargeRow}) {
  return (
    movie.poster_path &&
    movie.backdrop_path && (
      <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`poster ${isLargeRow && "poster__large"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    )
  );
}

export default Poster;
