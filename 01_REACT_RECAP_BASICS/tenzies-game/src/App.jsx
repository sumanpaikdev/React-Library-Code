import React from "react";
import "./App.css";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const refreshPage = () => {
    window.location.reload();
  };
  const [dice, setDice] = React.useState(generateDice());
  const [tanzies, setTanzies] = React.useState(false);

  React.useEffect(() => {
    const taptruth = dice.every((dice) => dice.tapon);
    if (taptruth) {
      setTanzies(true);
      console.log("You have won the game");
    }
  }, [dice]);

  function useDieObjectData() {
    return {
      diceNum: Math.floor(Math.random() * 10),
      tapon: false,
      id: nanoid(),
    };
  }
  function generateDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(useDieObjectData());
    }
    // console.log(newDice);
    return newDice;
  }

  function holdDiceValue(id) {
    setDice((prevDice) =>
      prevDice.map((dice) => {
        return dice.id == id ? { ...dice, tapon: !dice.tapon } : dice;
      })
    );
  }
  function generateNewDice() {
    setDice((oldDice) =>
      oldDice.map((olDice) => {
        return olDice.tapon ? olDice : useDieObjectData();
      })
    );
  }
  function replaygame() {
    setTanzies(false);
    // event.preventDefault()
    dice.tapon === false;
  }

  const showDice = dice.map((diceData) => {
    return (
      <Dice
        value={diceData.diceNum}
        key={diceData.id}
        tapon={diceData.tapon}
        holdDiceValue={() => holdDiceValue(diceData.id)}
      />
    );
  });

  return (
    <div className="container">
      {tanzies && <Confetti />}
      <div className="textcontainer">
        <p className="head">Tenzies</p>
        <p className="sub">
          Roll until all dice are same. Click each dice to freeze it at its
          current value between rolls.
        </p>
      </div>
      {showDice}
      <div className="btn">
        
        {tanzies ? (
          <button className="btnroll" onClick={refreshPage}>
            Refresh
          </button>
        ) : (
          <button className="btnroll" onClick={generateNewDice}>
            Roll
          </button>
        )}
      </div>
    </div>
  );
}
