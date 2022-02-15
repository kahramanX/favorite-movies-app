import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Suspense } from "react/cjs/react.production.min";
import ContentLoader from "react-content-loader";

// Components
import CreditsComponent from "./CreditsComponent";
import SimilarMovieList from "./SimilarMovieList";

// SASS
import "../../Assets/Styles/moviePage.scss";
import "../../Assets/Styles/movieList.scss";

function MoviePage() {
  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation().pathname.slice(7);
  const cuttedLocation = location.slice(0, location.indexOf("/"));

  const MovieListLoader = () => {
    return (
      <ContentLoader
        speed={1}
        width={"100%"}
        height={"400px"}
        backgroundColor="#232F3E"
        foregroundColor="rgb(57,69,86)"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
      </ContentLoader>
    );
  };

  const openCloseText = useRef("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${cuttedLocation}?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieInfo(res);
      });
  }, [cuttedLocation]);

  function clickTextToggleBtn() {
    let descElement = openCloseText.current.nextSibling;

    if (openCloseText.current.textContent === "Yazı aç") {
      descElement.style.whiteSpace = "normal";
      openCloseText.current.textContent = "Yazı kapat";
    } else if (openCloseText.current.textContent === "Yazı kapat") {
      descElement.style.whiteSpace = "nowrap";
      openCloseText.current.textContent = "Yazı aç";
    }
  }

  return (
    <>
      <div className="background-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
          alt="Movie Poster"
        />
      </div>
      <div className="movie-container">
        <div className="movie-card-container">
          <div className="movie-img-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
              alt="Movie Poster"
            />
            <button className="watchlist-btn">
              <i className="fas fa-plus"></i>
              Listeme Ekle
            </button>
          </div>

          <div className="movie-infos-container">
            <h2>{movieInfo.title}</h2>

            <div className="movie-tagline">
              <span>{movieInfo.tagline && `"${movieInfo.tagline}"`}</span>
            </div>

            <div className="movie-rates">
              <div className="vote-average tooltip">
                <span className="tooltiptext">Oy Oranı</span>
                <i className="fas fa-star"></i>
                {movieInfo.vote_average}
              </div>

              <div className="vote-count tooltip">
                <span className="tooltiptext">Oy Veren Sayısı</span>
                <i className="fas fa-users"></i>
                {movieInfo.vote_count}
              </div>

              <div className="release-date tooltip">
                <span className="tooltiptext">Yayınlanma Tarihi</span>
                <i className="fas fa-calendar-day"></i>
                {movieInfo.release_date}
              </div>

              <div className="movie-status tooltip">
                <span className="tooltiptext">Durum</span>
                <i className="far fa-question-circle"></i>
                {movieInfo.status}
              </div>
            </div>

            <div className="movie-description-container">
              <button
                onClick={() => clickTextToggleBtn()}
                ref={openCloseText}
                className="open-desc"
              >
                Yazı aç
              </button>
              <div className="movie-description">{movieInfo.overview}</div>
            </div>

            <div className="movie-genres-container">
              <h3>Türler:</h3>

              {movieInfo.genres &&
                movieInfo.genres.map((movieGenre, index) => {
                  return (
                    <div key={index} className="movie-genre">
                      <span>{movieGenre.name}</span>
                    </div>
                  );
                })}
            </div>

            <div className="spoken-languages-container">
              <h3>Diller:</h3>

              {movieInfo.spoken_languages &&
                movieInfo.spoken_languages.map((movieSpokenLang, index) => {
                  return (
                    <div key={index} className="movie-lang">
                      <span>{movieSpokenLang.name}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="credits-container">
        <div className="credits-title">
          <h2>Oyuncular</h2>
        </div>
        <div className="credits-list">
          <CreditsComponent movieId={cuttedLocation} />
        </div>
      </div>
      <section className="top-movie-list-container">
        <div className="section-title">
          <h2>Benzer Filmler</h2>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <Suspense fallback={<MovieListLoader />}>
          <div className="movie-list">
            <SimilarMovieList movieId={cuttedLocation} />
          </div>
        </Suspense>
      </section>
    </>
  );
}

export default MoviePage;
