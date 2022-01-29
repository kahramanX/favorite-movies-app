// Components
import Banner from "../src/components/Banner.js";
import TopMovieList from "../src/components/TopMovieList.js";

// SASS
import "../src/Assets/Styles/banner.scss";

function App() {
  return (
    <div className="App">
      <Banner />
      <TopMovieList />
    </div>
  );
}

export default App;
