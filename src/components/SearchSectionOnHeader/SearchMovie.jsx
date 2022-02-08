import { Link } from "react-router-dom";

function SearchMovie({ movieInfos }) {
  let movieUrl = `${movieInfos.id}/${movieInfos.title}`;

  return (
    <Link to={`/movie/${movieUrl.replace(/ /g, "-")}`}>
      <div className="movie-item">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movieInfos.poster_path && movieInfos.poster_path
            }`}
            alt="Mini_Movie_Photo"
          />
        </div>
        <div className="movie-name">{movieInfos.title && movieInfos.title}</div>
      </div>
    </Link>
  );
}

export default SearchMovie;
