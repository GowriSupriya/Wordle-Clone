import React, { useState } from "react";
import "./WordInput.css";

const WordInput = ({ onGuess }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkWordValidity = async (word) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.datamuse.com/words?sp=${word}&max=1`);
      const data = await response.json();
      setLoading(false);
      return data.length > 0; // Returns true if the word exists
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  const handleChange = (e) => {
    const newWord = e.target.value.toUpperCase();

    if (/^[A-Z]*$/.test(newWord)) { // Allow only letters
      setWord(newWord);
      setError(""); // Clear error on change
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (word.length === 5) {
      const isValidWord = await checkWordValidity(word);
      if (isValidWord) {
        onGuess(word);
        setWord("");
        setError("");
      } else {
        setError("Invalid word! Please enter a real word.");
      }
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
        placeholder="Enter a 5-letter word"
      />
      <button type="submit" className="guess-button" disabled={loading}>
        {loading ? "Checking..." : "Guess"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default WordInput;

