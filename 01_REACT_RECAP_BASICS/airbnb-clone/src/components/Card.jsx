import React from "react";
import "./card.css";

export default function Card(props) {

    
  let spotstatus;
  if (props.transferData.openSpots === 0) {
    spotstatus = "Not Available";
  } else if (props.transferData.location === "Online") {
    spotstatus = "ONLINE";
  } else if (props.transferData.openSpots > 0) {
    spotstatus = props.transferData.openSpots;
  }

  return (
    <div className="card-container">
      {spotstatus && <div className="status">{spotstatus}</div>}
      <img
        className="item-image"
        src={props.transferData.coverImg}
        alt="error loading"
      />
      <div className="property-container">
        <p className="title">{props.transferData.title}</p>
        <p className="description">{props.transferData.description}</p>
        <span className="rating">{props.transferData.stats.rating}</span>
      </div>
    </div>
  );
}
