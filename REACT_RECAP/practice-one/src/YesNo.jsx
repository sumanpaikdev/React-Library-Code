import React from "react";

export default function YesNo() {
  const [answer, setAnswer] = React.useState(true);
  function handleClick() {
    //    setAnswer(false)
    setAnswer((prevState) => {
      return prevState === true ? false : true;
    });
  }
  /* 
    Initial State: answer = true -- "Yes"
    Runtime 1: answer = true  prev = true  ==> false -- "No"
    Runtime 2: answer = false  prev = false  ==> true -- "Yes"
   */
  return (
    <div className="y-container">
      <h1 className="title">React with Scrimba</h1>
      <div onClick={handleClick} className="ans">
        {answer ? "Yes" : "No"}
      </div>
    </div>
  );
}
