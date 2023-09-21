import { NavLink } from "react-router-dom";
import "../Styles/Header.css";
import SignIn from "./SignIn";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyCartContext } from "../context/cartContext";

const Header = () => {
  const { cartItems } = useContext(MyCartContext);

  return (
    <div className="header-container">
      <NavLink to="/" className="title">
        <h1>Oscars Webbshop</h1>
      </NavLink>
      <div className="buttons-container">
        <SignIn />
        <div className="cart">
          <NavLink to="/cart">
            <Button variant="outlined">cart</Button>
          </NavLink>
          <p>{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
