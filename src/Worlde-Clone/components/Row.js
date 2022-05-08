import React from "react";

const Row = ({ guess, currentGuess }) => {
  console.log("this is guess", guess);
  if (guess) {
    return (
      <div className="row past">
        {guess.map((g, i) => {
          return (
            <div key={i} className={g.color}>
              {g.key}
            </div>
          );
        })}
      </div>
    );
  }
  if (currentGuess) {
    let letters = [...currentGuess];

    return (
      <div className="row current">
        {letters.map((l, i) => {
          return <div key={i} className="filled">{l}</div>;
        })}
        {[...Array(5 - letters.length)].map((item, index) => {
          return <div key={index}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
