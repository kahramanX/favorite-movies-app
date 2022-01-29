import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react/cjs/react.production.min";

// Components
const MovieCard = React.lazy(() => {
  // lazy loading için süre ekleniyor
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../TopMovieList/MovieCard")), 2000);
  });
});

function UpComingMovieList() {
  const [UpComing, setUpComing] = useState([]);
  //   const [topMovies, setTopMovies] = useState([]);

  const scrollBarRef = useRef(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setUpComing(res.results));
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
        <h2>Yakında Gelecek</h2>
      </div>
      <Suspense
        fallback={
          <i style={{ color: "white" }} className="fas fa-spinner fa-spin"></i>
        }
      >
        <div ref={scrollBarRef} className="movie-list">
          <button onClick={leftScroll} className="scroll-left-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          {UpComing.map((inMovie, index) => {
            return (
              <MovieCard
                key={index}
                inMovie={inMovie}
                addToWatchList={addToWatchList}
              />
            );
          })}
        </div>
      </Suspense>

      <button onClick={rightScroll} className="scroll-right-btn">
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}

export default UpComingMovieList;
