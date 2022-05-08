import React, { useEffect, useState } from "react";

const Keypad = () => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((data) => setLetters(data));
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((l, i) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
};

export default Keypad;
