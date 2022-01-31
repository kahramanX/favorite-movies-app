// Components
import Banner from "../src/components/Banner.js";
import AllComponentsOfMovieLists from "./components/ListedMoviesOnHomePage/AllComponentsOfMovieLists.js";

// SASS
import "../src/Assets/Styles/banner.scss";

function App() {
  return (
    <div className="App">
      <Banner />
      <AllComponentsOfMovieLists />
    </div>
  );
}

export default App;
