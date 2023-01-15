import React from "react";
import {Link} from "react-router-dom"

function Header({ cartLogo }) {
  return (
    <div className="header-container">
      <Link to="/" className="title">
        <p >Nature</p>
      </Link>
      <Link to="/cart">
        <img src={cartLogo} alt="CART" className="cart-logo" />
      </Link>
    </div>
  );
}
export default Header;
