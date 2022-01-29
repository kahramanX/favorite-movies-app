function MovieCard({ inMovie, addToWatchList }) {
  return (
    <div className="movie-card">
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/original/${inMovie.poster_path}`}
          alt="movie banner"
        />
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
          onClick={(e) => addToWatchList(e, inMovie)}
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
