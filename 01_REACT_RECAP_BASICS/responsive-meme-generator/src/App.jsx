import React from "react"
import "./App.css"
import MemeGenerator from "./MemeGenerator"
import logo from "./TrollFace.png"

export default function App() {
  return(
    <div className="app-container">
      <MemeGenerator logo={logo}/>
    </div>
  )
}