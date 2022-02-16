import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [numofQuestions, setNumOfQuestions] = useState();

  return (
    <QuizContext.Provider
      value={{
        name,
        setName,
        questions,
        setQuestions,
        score,
        setScore,
        numofQuestions,
        setNumOfQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const QuizState = () => {
  return useContext(QuizContext);
};
export default QuizProvider;
