import React from "react";
import { useQuiz } from "./contexts/QuizContext";

export default function NextButton() {
  const { dispatch, selectedAns, index, numQuestion } = useQuiz();
  if (selectedAns === null) return null;
  if (index < numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finished
        </button>
      </div>
    );
}
