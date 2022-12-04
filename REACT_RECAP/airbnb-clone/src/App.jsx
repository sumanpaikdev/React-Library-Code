import React from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {
  const cardData = data.map((itemValue) => {
    return (
      <Card
        // key = {itemValue.id}
        // itemTitle = {itemValue.title}
        // itemDescription = {itemValue.description}
        // itemRating = {itemValue.stats.rating}
        // itemCover = {itemValue.coverImg}
        // itemSpot = {itemValue.openSpots}
        // itemLocation = {itemValue.location}

        // ES6 feature
        transferData={itemValue} // or
      />
    );
  });

  return (
    <div className="app-container">
      <section className="card-section">{cardData}</section>
    </div>
  );
}
