import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Aplikationens namn</h1>
      <div className="buttons-container">
        <button className="header-button">Logga in</button>
        <button className="header-button">
          <Link to="/cart">Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
