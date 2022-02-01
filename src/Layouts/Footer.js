// SASS
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Assets/Styles/footer.scss";

function Footer() {
  return (
    <Router>
      <footer>
        <div className="ft-direction-container">
          <span>Burası sıkıcı, filtreleme özelliğini kullan :)</span>
          <Link to="filter">Filtrele</Link>
        </div>
      </footer>
    </Router>
  );
}

export default Footer;
