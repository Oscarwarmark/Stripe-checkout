import { NavLink } from "react-router-dom";
import "../Styles/Header.css";
import SignIn from "./SignIn";
import Button from "@mui/material/Button";
const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/" className="title">
        <h1>Oscars Hattar</h1>
      </NavLink>

      <div className="buttons-container">
        <SignIn />
        <Button variant="outlined" className="header-button">
          <NavLink to="/cart">Cart</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Header;
