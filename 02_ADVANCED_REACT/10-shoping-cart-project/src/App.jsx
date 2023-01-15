import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header.jsx";
import Photos from "./pages/Photos.jsx"
import Cart from "./pages/Cart.jsx"


import logo from "./asset/CartLOGO.png";

function App() {
  return (
    <div className="app-container">
      <Header logo={logo} />

      <Routes>
        <Route path="/" element={<Photos/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
export default App;
