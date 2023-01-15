import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/services/Services"
import ServiceItem from "./pages/services/ServiceItem"

import Header from "./components/Header"

export default function App() {
  return(
    <div className="app-container">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/services/details/:serviceID" element={<ServiceItem/>} />
      </Routes>
    </div>
  )
}