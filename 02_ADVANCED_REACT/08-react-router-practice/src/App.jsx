import React from "react"
import "./App.css"
import {Routes, Route} from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import HomeContainer from "./pages/HomeContainer"
import AboutContainer from "./pages/AboutContainer"
import ContactContainer from "./pages/contact/ContactContainer"
import Gmail from "./pages/contact/Gmail"
import Phone from "./pages/contact/Phone"

export default function App() {
  return(
    <div className="app-container">
      <Header/>

      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/about" element={<AboutContainer/>}/>
        <Route path="/contact" element={<ContactContainer/>}/>
        <Route path="/contact/gmail" element={<Gmail/>} />
        <Route path="/contact/phone" element={<Phone/>} />
      </Routes>

      <Footer/>
    </div>
  )
}
