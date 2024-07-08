import React from "react";
import question from "./Question"
import { useQuiz } from "./contexts/QuizContext";

export default function FinishedScreen() {
  const {
    points,
    maxPossiblePoints,
    dispatch,
  }  =  useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong>out of {maxPossiblePoints}
        {Math.ceil(percentage)}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" , payload:question })}
      >
        Restart
      </button>
    </>
  );
}
