import React from "react";
import { useQuiz } from "./contexts/QuizContext";

export default function Question({ question }) {
  const { selectedAns, dispatch } = useQuiz();
  const hasAnswered = selectedAns != null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${
              index === selectedAns ? "answer" : ""
            } ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "answered", payload: { index } })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
