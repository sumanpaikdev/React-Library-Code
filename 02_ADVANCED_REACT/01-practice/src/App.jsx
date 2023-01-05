// PropTypes and defaultProps

import React from "react";
import "./App.css";
import ImageRadius from "./ImageRadius";

export default function App() {
  return (
    <div className="app-container">
      <ImageRadius
        src={
          "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        }
        borderRadius={"50px"}
        width={100}
        height={"400px"}
      />
    </div>
  );
}
