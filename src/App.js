// Components
import Banner from "../src/components/Banner.js";
import TopMovieList from "../src/components/ListedMoviesOnHomePage/TopMovieList/TopMovieList.js";
import UpComingMovieList from "./components/ListedMoviesOnHomePage/UpComingMovieList/UpComingMovieList.js";
import TopRatedMovieList from "./components/ListedMoviesOnHomePage/TopRatedMovieList/TopRatedMovieList.js";

// SASS
import "../src/Assets/Styles/banner.scss";

function App() {
  return (
    <div className="App">
      <Banner />
      <TopMovieList />
      <UpComingMovieList />
      <TopRatedMovieList />
    </div>
  );
}

export default App;
