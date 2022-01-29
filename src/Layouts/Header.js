// SASS
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Assets/Styles/header.scss";

function Header() {
  return (
    <Router>
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

        <div className="header-right-section">
          <div className="search-btn">
            <Link to="/search">Film Ara</Link>
          </div>

          <div className="favorites-btn">
            <Link to="watchlist">İzleme Listesi</Link>
          </div>

          <div className="user-btn">
            <Link to="/user">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Switch>
      </header>
    </Router>
  );
}

export default Header;
