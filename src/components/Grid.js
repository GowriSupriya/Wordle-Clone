import React from "react";
import "./Grid.css";

const Grid = ({ guesses, targetWord, gameOver }) => {
  return (
    <div className="grid">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const letter = guess[colIndex] || "";
            let className = "cell";

            if (letter) {
              if (letter === targetWord[colIndex]) {
                className += " green";
              } else if (targetWord.includes(letter)) {
                className += " yellow";
              } else {
                className += " gray";
              }
            }

            return (
              <div key={colIndex} className={className}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}

      {/* Show only one extra input grid if game is not over */}
      {!gameOver && guesses.length < 6 && (
        <div className="row">
          {Array.from({ length: 5 }).map((_, colIndex) => (
            <div key={colIndex} className="cell"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Grid;






