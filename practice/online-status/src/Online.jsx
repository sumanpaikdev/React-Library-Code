import React from "react";

export default function Online(props) {
    
    const bgcolor = {
        backgroundColor: props.status ? "orange" : "gray"
    }
    return(
        <div className="online" style={bgcolor} onClick={() => props.toggle}>
        </div>
    )
}