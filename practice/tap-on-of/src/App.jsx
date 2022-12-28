import React from "react";
import "./App.css";
import Component from "./Component.jsx";
import data from "./data.json";

export default function App() {
  const [itemdata, setItemdata] = React.useState(data);

  function toggle(id) {
    setItemdata((prevdata) => {
        return(
            prevdata.map(updatedata => {
                return updatedata.id === id ? {...updatedata, status: !updatedata.status} : updatedata
            })
        )
    })
  }
  const componentItem = itemdata.map((divstat) => {
    return <Component 
        id={divstat.id}
        key={divstat.id}
        status={divstat.status}
        value={divstat.value}
        toggle={() => toggle(divstat.id)}

    />;
  });

  return <div className="component-container">{componentItem}</div>;
}
