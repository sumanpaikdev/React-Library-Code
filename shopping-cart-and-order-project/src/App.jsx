import React from "react"
import "./App.css"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Nature from "./pages/Nature"
import Cart from "./pages/Cart"

import CARTLOGO from "./images/cart.png"

function App() {
  return(
    <div className="app-container">
      <Header cartLogo={CARTLOGO}/>

      <Routes>
        <Route path="/" element={<Nature/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
export default App