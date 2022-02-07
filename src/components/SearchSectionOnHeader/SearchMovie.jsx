function SearchMovie({ movieInfos }) {
  return (
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
  );
}

export default SearchMovie;
