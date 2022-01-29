import { useEffect, useRef, useState } from "react";

function TopMovieList() {
  const [topMovies, setTopMovies] = useState([]);

  const scrollBarRef = useRef(0);
  const watchListBtn = useRef();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setTopMovies(res.results));
  }, []);

  function addToWatchList(event, test) {
    console.log(test.title);
    successInfo(event.target);
  }
  function successInfo(event) {
    event.innerHTML = "<i class='fas fa-plus'></i> Listeme Ekle";
    event.innerHTML = "<i class='fas fa-check-square'></i> Eklendi";
    event.style.color = "#2ee65a";
    event.style.border = "1px solid #2ee65a";

    setTimeout(() => {
      event.style.backgroundColor = "rgba(0, 169, 225, 0.192)";
      event.innerHTML = "<i class='fas fa-plus'></i> Listeme Ekle";
      event.style.color = "rgb(0, 168, 225)";
      event.style.border = "none";
    }, 1600);
  }

  function rightScroll() {
    scrollBarRef.current.scrollLeft += 650;
  }

  function leftScroll() {
    scrollBarRef.current.scrollLeft -= 650;
  }

  return (
    <section className="top-movie-list-container">
      <div className="section-title">
        <h2>Top Filmler</h2>
      </div>
      <div ref={scrollBarRef} className="movie-list">
        <button onClick={leftScroll} className="scroll-left-btn">
          <i className="fas fa-chevron-left"></i>
        </button>
        {topMovies.map((inMovie, index) => {
          return (
            <div key={index} className="movie-card">
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
                  /* daha sonra kullanılacak */
                  ref={watchListBtn}
                  onClick={(e) => addToWatchList(e, inMovie)}
                  className="watchlist-btn"
                >
                  <i className="fas fa-plus"></i>
                  Listeme Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={rightScroll} className="scroll-right-btn">
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}

export default TopMovieList;
