// Components
import Banner from "../src/components/Banner.js";
import TopMovieList from "../src/components/TopMovieList/TopMovieList.js";
import UpComingMovieList from "./components/UpComingMovieList/UpComingMovieList.js";

// SASS
import "../src/Assets/Styles/banner.scss";

function App() {
  return (
    <div className="App">
      <Banner />
      <TopMovieList />
      <UpComingMovieList />
    </div>
  );
}

export default App;
