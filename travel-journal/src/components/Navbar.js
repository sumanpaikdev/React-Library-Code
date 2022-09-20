import React from "react";

export default function Navbar(props){
    return(
        <div className="navbar--container">
            <div className="middle--container">
            <img src={props.img} className="nav--image" />
            <span className="nav--p">My Travel Journal</span>
            </div>
        </div>
    )
}