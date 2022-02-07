// SASS
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/header.scss";

//Components
import SearchMovie from "../components/SearchSectionOnHeader/SearchMovie";

function Header() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR&query=${inputValue}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((res) => setSearchMovie(res.results));
  }, [inputValue]);

  console.log(searchMovie);
  console.log(inputValue);

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img
            /* use require for import image */
            src={require("../Assets/Images/favorites-logo.png")}
            alt="Favorites Logo"
          />
        </Link>
      </div>

      <div className="search-box-container">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Film ara..."
        />

        <div className="search-box">
          {searchMovie &&
            searchMovie.map((movieInfos, index) => {
              return <SearchMovie movieInfos={movieInfos} key={index} />;
            })}
        </div>
      </div>

      <div className="header-right-section">
        <div className="search-btn">
          <Link to="/filter">Filtre</Link>
        </div>

        <div className="favorites-btn">
          <Link to="/watchlist">İzleme Listesi</Link>
        </div>

        <div className="user-btn">
          <Link to="/user">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
