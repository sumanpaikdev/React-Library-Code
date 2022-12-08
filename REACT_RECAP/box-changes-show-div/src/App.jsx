import React from "react";
import "./App.css"
import Empdiv from "./Empdiv"
import boxdata from "./box"

export default function App() {

  // const data = boxdata.map()

  const [boxstate, setBoxstate] = React.useState(boxdata[0].on)
  console.log(boxstate)
  return (
    <main>
      <Empdiv/>
    </main>
  );
}
