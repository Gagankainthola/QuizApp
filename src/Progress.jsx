import React from "react";
import { useQuiz } from "./contexts/QuizContext";
export default function Progress() {
  const { index, numQuestion, points, maxPossiblePoints, selectedAns } =
    useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestion}
        value={index + Number(selectedAns !== null)}
      />
      <p>
        Question<strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}
