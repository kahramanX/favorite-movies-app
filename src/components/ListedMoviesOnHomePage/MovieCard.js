import { Link } from "react-router-dom";

function MovieCard({ inMovie, addToWatchList }) {
  let movieUrl = `${inMovie.id}/${inMovie.title}`;
  return (
    <div data-aos="fade-left" className="movie-card">
      <div className="card-image">
        <Link to={`/movie/${movieUrl.replace(/ /g, "-")}`}>
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original/${inMovie.poster_path}`}
            alt="movie banner"
          />
        </Link>
      </div>
      <div className="movie-infos">
        <div className="movie-rates">
          <i className="fas fa-star"></i>
          <span>{inMovie.vote_average}</span>
        </div>

        <button className="info-btn">
          <i className="fas fa-info-circle"></i>
        </button>
      </div>

      <div className="movie-name">{inMovie.title}</div>

      <div className="card-buttons">
        <button
          onClick={(event) => addToWatchList(event)}
          className="watchlist-btn"
        >
          <i className="fas fa-plus"></i>
          Listeme Ekle
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
