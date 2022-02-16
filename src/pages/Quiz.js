import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { QuizState } from "../context/QuizProvider";
import $ from "jquery";

const Quiz = () => {
  const { name, questions, score } = QuizState();

  const [choices, setChoices] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setChoices(
      questions &&
        handleShuffle([
          questions[currentQuestion].correct_answer,
          ...questions[currentQuestion].incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text
          style={{
            fontSize: "25px",
            border: "1px solid black",
            boxShadow: "4px 4px 2px black",
            marginTop: "10px",
            padding: "4px 4px",
          }}
        >
          Welcome, {name}
        </Text>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          mt="15px"
          textTransform="uppercase"
          fontSize={{ md: "25px" }}
        >
          {/* <Text>{questions && questions[currentQuestion].category}</Text> */}
          <Text>
            {questions &&
              $("<textarea />")
                .html(questions[currentQuestion].category)
                .text()}
          </Text>
          <Text>Score: {score}</Text>
        </Box>

        {questions ? (
          <Question
            currentQuestion={currentQuestion}
            choices={choices}
            setCurrentQuestion={setCurrentQuestion}
          />
        ) : (
          <Spinner size="xl" thickness="4px" color="inherit" />
        )}
      </Box>
    </>
  );
};

export default Quiz;
