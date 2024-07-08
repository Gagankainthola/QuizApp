import React, { useEffect } from "react";
import { useQuiz } from "./contexts/QuizContext";

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
      //console.log(secondsRemaining);
    }, 1000);
    return ()=>clearInterval(id);
  }, [dispatch]);
  return <div className="timer">{secondsRemaining}</div>;
}
