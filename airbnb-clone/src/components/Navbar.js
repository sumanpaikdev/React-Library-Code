import React from "react"

export default function Navbar(props){
    return(
        <div className="navbar--container">
        <img src={props.img} alt="errod loading" className="navbar--logo"/>
        </div>
    )
}