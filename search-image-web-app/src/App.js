import React from "react";
import "./App.css"
import Items from "./components/Items.js"

import ItemImg from "./images/vackground-com-SfDofjXtxHE-unsplash.jpg"

export default function App() {
  return(
    <div className="app--container">
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
      <Items 
       imgitem = {ItemImg}
      />
    </div>
  );
}