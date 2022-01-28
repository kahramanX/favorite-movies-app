// SASS
import "../Assets/Styles/header.scss";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img
          /* use require for import image */
          src={require("../Assets/Images/favorites-logo.png")}
          alt="Favorites Logo"
        />
      </div>

      <div className="header-right-section">
        <div className="search-btn">
          <a href="#">Search</a>
        </div>

        <div className="favorites-btn">
          <a href="#">Favorites</a>
        </div>

        <div className="user-btn">
          <a href="#">
            <i class="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
