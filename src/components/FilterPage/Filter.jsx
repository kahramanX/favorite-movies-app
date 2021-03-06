// SASS
import { useEffect, useState } from "react";
import "../../Assets/Styles/filterPage.scss";
import "../../Assets/Styles/newMovieCard.scss";

// Components
import MovieCard from "../ListedMoviesOnHomePage/MovieCard";

function Filter() {
  const [movieGenres, setMovieGenres] = useState([]);

  //filter state of options
  // release year
  const [minReleaseYear, setMinReleaseYear] = useState("");
  const [maxReleaseYear, setMaxReleaseYear] = useState("");
  // movie genre
  const [selectMovieGenre, setSelectMovieGenre] = useState([]);
  // movie sort
  const [sortMovie, setSortMovie] = useState("");
  // get movie from filter
  const [movieFilterAPI, setMovieFilterAPI] = useState([]);

  // for film genres
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieGenres(res.genres);
      });
  }, []);

  // for film filter
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR&sort_by=${sortMovie}&include_adult=false&include_video=false&page=1&with_genres=${selectMovieGenre.toString()}&release_date.gte=${minReleaseYear}&release_date.lte=${maxReleaseYear}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieFilterAPI(res.results);
      });
  }, [maxReleaseYear, minReleaseYear, sortMovie, selectMovieGenre]);

  function addGenreToFetch(element) {
    let genreId = element.dataset.genreId;

    if (!selectMovieGenre.includes(genreId)) {
      setSelectMovieGenre((selectMovieGenre) =>
        selectMovieGenre.concat(genreId)
      );

      element.style.backgroundColor = "#00a8e1";
    } else if (selectMovieGenre.includes(genreId)) {
      let index = selectMovieGenre.indexOf(genreId);

      if (index > -1) {
        selectMovieGenre.splice(index, 1);
        element.style.backgroundColor = "transparent";
      }
    }
  }

  function clickedFilterOption(optionElement) {
    if (optionElement.classList.contains("filter-option")) {
      if (optionElement.classList.contains("selected-filter")) {
        optionElement.classList.remove("selected-filter");
        optionElement.children[1].style.display = "none";
      } else {
        optionElement.classList.add("selected-filter");
        optionElement.children[1].style.display = "block";
      }
    }
  }

  return (
    <>
      <div className="filter-section-container">
        <div className="movie-and-tvshow">
          <span className="selected-show">Filmler</span>
          <span>Diziler</span>
        </div>

        <div className="filter-container">
          <div
            onClick={(e) => {
              clickedFilterOption(e.target);
            }}
            className="filter-option"
          >
            Yay??n Y??l??
            <i className="fas fa-angle-down"></i>
            <div className="filter-modal">
              Min:
              <input
                className="min-year"
                type="number"
                min="0"
                max="2030"
                placeholder="Min year"
                onChange={(e) => setMinReleaseYear(e.target.value)}
              />
              Max:
              <input
                className="max-year"
                type="number"
                min="0"
                max="2030"
                placeholder="Max year"
                onChange={(e) => setMaxReleaseYear(e.target.value)}
              />
            </div>
          </div>

          <div
            onClick={(e) => {
              clickedFilterOption(e.target);
            }}
            className=" filter-option"
          >
            T??rler
            <i className="fas fa-angle-down"></i>
            <div className="filter-modal">
              <div className="filter-content">
                {movieGenres.map((genre, index) => {
                  return (
                    <div
                      data-genre-id={genre.id}
                      key={index}
                      className="genre-option"
                      onClick={(e) => addGenreToFetch(e.target)}
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            onClick={(e) => {
              clickedFilterOption(e.target);
            }}
            className=" filter-option"
          >
            S??ralama
            <i className="fas fa-angle-down"></i>
            <div className="filter-modal">
              <div className="filter-content">
                <select
                  onChange={(e) => setSortMovie(e.target.value)}
                  defaultValue={"Se??"}
                >
                  <option disabled defaultValue={"Se??"}>
                    Se??
                  </option>
                  <option value={"popularity.asc"}>Popularite azalan</option>
                  <option value={"popularity.desc"}>Popularite artan</option>
                  <option value={"release_date.asc"}>
                    Yay??nlanma tarihi artan
                  </option>
                  <option value={"release_date.desc"}>
                    Yay??nlanma tarihi azalan
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="filtered-movie-section">
        {movieFilterAPI.map((movie, index) => {
          return <MovieCard key={index} inMovie={movie} />;
        })}
      </section>
    </>
  );
}

export default Filter;
