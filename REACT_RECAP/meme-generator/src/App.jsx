import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputSection from "./components/InputSection";

// import MemeSec from "./components/MemeSec";

import memeLogo from "../public/Logo.png";

export default function App() {

  return (
    <div className="app-container">
      <Navbar imgmeme={memeLogo} />
      <InputSection />
      {/* <MemeSec /> */}
    </div>
  );
}
