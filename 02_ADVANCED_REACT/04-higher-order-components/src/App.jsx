import React from "react"
import "./App.css"
import { showName } from "./showName"

function App(props) {
  return(
    <div className="app-container">
      <p>{props.myName}`</p>
    </div>
  )
}

export default showName(App);


// Here I am going to use higher order component
// Lets see how higher order component works  