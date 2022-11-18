import React from "react";

export default function Items(props) {
    return(
        <div className="item--container">
            <img className="item--image" src={props.imgitem} />
            <p className="item--name">Item Name</p>
        </div>
    );
}