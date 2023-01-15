import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

function Header(props) {
    return(
        <div className="header-container">
            <p className="header-nature-title">
                <Link className="nature-link " to="/">Nature</Link>
            </p>
            <Link to="/cart"><img className="cart-logo" src={props.logo} alt="cart" /></Link>
        </div>
    )
}
export default Header;