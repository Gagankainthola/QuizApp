import React from "react";
import { useQuiz } from "./contexts/QuizContext";

export default function StartScreen() {
  const { dispatch, numQuestion } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestion} questions to test your react mastery!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        lets Start!
      </button>
    </div>
  );
}
