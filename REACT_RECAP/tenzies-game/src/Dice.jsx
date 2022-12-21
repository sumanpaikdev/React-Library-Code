import React from "react";

export default function Dice(props) {
    const bgcolor = {
        backgroundColor: props.tapon ? "rgb(0, 221, 255)" : "white"
    }
    return(
        <div className="dice" style={bgcolor} onClick={props.holdDiceValue}>
            <h2>{props.value}</h2>
        </div>
    )
}