import React from "react";

export default function User(props) {

    const bgcolor = { backgroundColor: props.state ? "tomato" : "white" }
    return(
        <div style={bgcolor} className="user--container" onClick={() =>props.toggle(props.id)}>
            <b className="user-name">User {props.id}</b>
        </div>
    )
}