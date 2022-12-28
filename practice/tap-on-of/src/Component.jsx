import React from "react";

export default function Component(props) {
    const bgcolor = {
        backgroundColor: props.status ? "#66CB20" : "gray"
    }
    return(
        <div className="items" style={bgcolor} onClick={props.toggle}>
            {props.value}
        </div>
    )
}
