import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react/cjs/react.production.min";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ContentLoader from "react-content-loader";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
const MovieCard = React.lazy(() => {
  // lazy loading için süre ekleniyor
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../MovieCard")), 500);
  });
});

function TopRatedMovieList() {
  const [UpComing, setUpComing] = useState([]);

  const scrollBarRef = useRef(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setUpComing(res.results));

    // data-aos animation init
    AOS.init();
  }, []);

  function addToWatchList(event) {
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

  function goToTheMoviePage(movieInfo) {
    console.log(movieInfo);
  }

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

  return (
    <section className="top-movie-list-container">
      <Router>
        <Link to="/top-rated">
          <div className="section-title">
            <h2>En Çok Sevilen</h2>
            <div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </Link>
      </Router>

      <Suspense fallback={<MovieListLoader />}>
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
                goToTheMoviePage={goToTheMoviePage}
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

export default TopRatedMovieList;
