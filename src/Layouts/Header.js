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
          <a href="#">Film Ara</a>
        </div>

        <div className="favorites-btn">
          <a href="#">İzleme Listesi</a>
        </div>

        <div className="user-btn">
          <a href="#">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
