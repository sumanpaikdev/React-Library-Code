import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const TIME_COUNT = 6;
  const [typeText, setTypeText] = useState("");
  const [isRemaining, setIsRemaining] = useState(TIME_COUNT);
  const [wordCount, setWordCount] = useState(0);
  const [startGame, setStartGame] = useState(false);

  function updateTypeText(event) {
    setTypeText(event.target.value);
  }
  function calculatewordcount(typeText) {
    const wordArray = typeText.trim().split(" ");
    const actualArray = wordArray.filter((realWord) => realWord !== "");

    return actualArray.length;
  }

  useEffect(() => {
    if (isRemaining > 0 && startGame === true) {
      setTimeout(() => {
        setIsRemaining((prevCount) => prevCount - 1);
      }, 1000);
    } else if (isRemaining === 0) {
      endTypeGame();
    }
  }, [isRemaining, startGame]);

  function startTypeGame() {
    setStartGame(true);
    setTypeText("");
    setIsRemaining(TIME_COUNT)
    setWordCount(0);
  }
  function endTypeGame() {
    setStartGame(false);
    setWordCount(calculatewordcount(typeText));
  }
  return (
    <div className="app-container">
      <h1 className="game-heading">React Typing Game</h1>
      <textarea
        className="game-text"
        value={typeText}
        onChange={updateTypeText}
        disabled={!startGame}
        autoFocus
      />
      <h4 className="game-time-ramaining">Time Remaining: {isRemaining}</h4>
      <button
        className="game-start-button"
        onClick={startTypeGame}
        disabled={startGame}
      >
        Start
      </button>
      <h4 className="game-word-count">Word Count: {wordCount}</h4>
    </div>
  );
}
export default App;
