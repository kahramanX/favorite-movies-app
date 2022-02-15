import React, { useEffect, useState } from "react";

// Components
import MovieCard from "../ListedMoviesOnHomePage/MovieCard";

// SASS
import "../../Assets/Styles/movieList.scss";

function SimilarMovieList({ movieId }) {
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR&page=1`
    )
      .then((res) => res.json())
      .then((res) => setSimilarMovie(res.results));
  }, [movieId]);

  return similarMovie.map((inMovie, index) => {
    return <MovieCard inMovie={inMovie} key={index} />;
  });
}

export default SimilarMovieList;
