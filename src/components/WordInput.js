import React, { useState } from "react";
import "./WordInput.css";

const WordInput = ({ onGuess }) => {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length === 5) {
      onGuess(word);
      setWord("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="word-input">
      <input
        type="text"
        value={word}
        onChange={handleChange}
        maxLength={5}
        className="input-field"
      />
      <button type="submit" className="guess-button">
        Guess
      </button>
    </form>
  );
};

export default WordInput;

