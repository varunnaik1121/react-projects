import React, { useEffect } from "react";
import useWordle from "../Hooks/useWordle";
const Wordle = ({ solution }) => {
  const { handleKeyup, currentGuess } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);
  return <div>currentGuess is :{currentGuess}</div>;
};

export default Wordle;
