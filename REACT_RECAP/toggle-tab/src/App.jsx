import React from "react";
import "./App.css";
import Data from "./Data";
import User from "./User";

export default function App() {
  const [online, setOnline] = React.useState(Data);

  const userData = online.map((item) => {
    return (
      <User key={item.key} id={item.id} state={item.state} toggle={toggle} />
    );
  });

  function toggle(id) {
    console.log(id);
    setOnline((prevState) => {
      const newUserData = [];
      for (let i = 0; i < prevState.length; i++) {
        const currentUserData = prevState[i];
        if (currentUserData.id === id) {
          const updateUserData = {
            ...currentUserData,
            state: !currentUserData.state,
          };
          newUserData.push(updateUserData);
        } else {
          newUserData.push(currentUserData);
        }
      }
      return newUserData
    });
  }
  return <div className="app--container">{userData}</div>;
}
