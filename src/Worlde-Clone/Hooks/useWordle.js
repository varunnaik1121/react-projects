import React, { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHisory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(true);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter, index) => {
      return { key: letter, color: "grey" };
    });
    formattedGuess.forEach((letter, index) => {
      //finding the green letters i.e is exactly match

      if (solutionArray[index] === letter.key) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }

      //finding the yellow match i.e any match but not at the same place
    });
    formattedGuess.forEach((letter, index) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[index].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuesses = () => {};

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("you ran out of turns");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("this is already there");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("the guess must be 5 chars in length");
        return;
      }
      const formatted = formatGuess();
      console.log(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      currentGuess.length < 5 && setCurrentGuess((prev) => prev + key);
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
