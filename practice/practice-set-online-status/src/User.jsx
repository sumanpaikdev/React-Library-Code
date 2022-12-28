import React from "react"

export default function User(props) {

    const bgColor = {
        backgroundColor: props.status ? "rgb(125, 240, 125)" : "gray"
    }
    
    return(
        <div className="user" style={bgColor} onClick={props.changeUserStatus}>

        </div>
    )
}