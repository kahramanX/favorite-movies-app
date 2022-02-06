import { useEffect } from "react";

// Components
import Banner from "./components/Banner";
import AllComponentsOfMovieLists from "./components/ListedMoviesOnHomePage/AllComponentsOfMovieLists.jsx";
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
