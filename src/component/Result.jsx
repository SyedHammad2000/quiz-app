import React from "react";

const Result = ({ score, question,reset }) => {
  return (
    <div>
      <h1>{`congrats you scored ${score} out of ${question}`}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Result;
