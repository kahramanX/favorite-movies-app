import { useEffect } from "react";

// Components
import Banner from "../src/components/Banner.js";
import AllComponentsOfMovieLists from "./components/ListedMoviesOnHomePage/AllComponentsOfMovieLists.js";
import AOS from "aos";
import "aos/dist/aos.css";

// SASS
import "../src/Assets/Styles/banner.scss";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Banner />
      <AllComponentsOfMovieLists />
    </div>
  );
}

export default App;
