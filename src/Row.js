import React, {useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";
import Poster from "./Poster";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.original_title || movie?.original_name || "",
        (movie?.first_air_date || movie?.release_date)?.split("-")[0]
      )
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <Poster
            movie={movie}
            handleClick={handleClick}
            isLargeRow={isLargeRow}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
