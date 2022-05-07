import React, { useEffect } from "react";
import useWordle from "../Hooks/useWordle";
import Grid from "./Grid";
const Wordle = ({ solution }) => {
  const { handleKeyup, currentGuess, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <>
      <div>currentGuess is :{currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
    </>
  );
};

export default Wordle;
