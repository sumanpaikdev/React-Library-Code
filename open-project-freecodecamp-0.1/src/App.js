import React from "react";
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import "./App.css"


export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}