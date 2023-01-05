import React from "react"

export default function Border(props) {
    return(
        <div className="common-container">
            <p>It is a common container</p>
            {props.children}
        </div>
    )
}