import React, { useState } from "react";
import Grid from "./components/Grid";
import WordInput from "./components/WordInput";
import words from "./utils/wordList";
import "./App.css";

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (word) => {
    if (word.length !== 5 || gameOver) return;

    const newGuesses = [...guesses, word];
    setGuesses(newGuesses);

    if (word === targetWord || newGuesses.length === 6) {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>WORDLE</h1>
      <Grid guesses={guesses} targetWord={targetWord} gameOver={gameOver} />
      {!gameOver && <WordInput onGuess={handleGuess} />}
      {gameOver && (
        <div>
          <p>
            {guesses[guesses.length - 1] === targetWord ? "You Win!" : "Game Over! The word was "}
            <span className="target-word">{targetWord}</span>
          </p>
          <button className="guess-button" onClick={handleRestart}>New Game</button>
        </div>
      )}
    </div>
  );
};

export default App;









