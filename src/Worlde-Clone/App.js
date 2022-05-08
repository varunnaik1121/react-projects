import React, { useEffect, useState } from "react";
import "./App.css";

import Wordle from "./components/Wordle";
const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="title">
      React Worlde Game
  
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

export default App;
