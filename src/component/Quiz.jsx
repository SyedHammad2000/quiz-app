import React, { useState } from "react";
import { quizQuestions } from "../questions";
import Result from "./Result.jsx";
import Question from "./Question";

const Quiz = () => {
  const [currentque, setcurrentque] = useState(0);
  const [score, setscore] = useState(0);
  const [showscore, setshowscore] = useState(false);

  const handlequizquestions = (selectedoption) => {
    if (selectedoption === quizQuestions[currentque].answer) {
      setscore(score + 1);
    }

    if (currentque < quizQuestions.length - 1) {
      setcurrentque(currentque + 1);
    } else {
      setshowscore(true);
    


      
    }

  };
  // reset function
  const reset = ()=>{
    setcurrentque(0)
    setscore(0)
    setshowscore(false)
  }
  
  return (
    <div>
      <h1>Quiz App</h1>
      {
        //  show score condition
        // showscore < quizQuestions.length?

        showscore ? (
          <Result score={score} question={quizQuestions.length} reset={reset} />
        ) : (
          <Question
            question={quizQuestions[currentque]}
            handlequizquestions={handlequizquestions}
           
          />
        )
      }
    </div>
  );
};

export default Quiz;
