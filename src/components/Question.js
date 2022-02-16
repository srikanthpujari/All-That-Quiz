import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizState } from "../context/QuizProvider";
import $ from "jquery";

const Question = ({ currentQuestion, choices, setCurrentQuestion }) => {
  const { questions, score, setScore, numofQuestions } = QuizState();
  const [selected, setSelected] = useState();

  const history = useHistory();
  const toast = useToast();

  const handleCheck = (choice) => {
    setSelected(choice);
    if (choice === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      handleSelect(choice);
    }
  };

  const handleSelect = (choice) => {
    if (
      selected === choice &&
      selected === questions[currentQuestion].correct_answer
    ) {
      return "green";
    } else if (
      selected === choice &&
      selected !== questions[currentQuestion].correct_answer
    ) {
      return "red";
    } else if (questions[currentQuestion].correct_answer === choice)
      return "green";
  };

  const handleNext = () => {
    if (currentQuestion > numofQuestions - 2) {
      history.push("/result");
    }
    if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      toast({
        title: "Please select and answer",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
      >
        <Text
          mt="20px"
          fontSize={{ base: "28px", md: "40px" }}
          fontFamily="Montserrat"
        >
          Question {currentQuestion + 1}
        </Text>
        <Box
          width="95%"
          minHeight="400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          border="5px solid grey"
          padding="20px"
          mt="10px"
        >
          <Text style={{ overflowWrap: "break-word" }}>
            {/* {questions[currentQuestion].question} */}
            {$("<textarea />").html(questions[currentQuestion].question).text()}
          </Text>

          <Box
            width="100%"
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            flex="1"
            justifyContent="space-around"
            mt="10px"
          >
            {choices &&
              choices.map((choice) => (
                <Button
                  key={choice}
                  variant="solid"
                  //disabled={selected}
                  onClick={() => handleCheck(choice)}
                  fontFamily="Montserrat"
                  fontSize="sm"
                  width={{ base: "100%", md: "46%" }}
                  height="50px"
                  padding="15px 20px"
                  boxShadow="0 0 5px black"
                  colorScheme={selected && handleSelect(choice)}
                  style={{ whiteSpace: "normal", overflowWrap: "break-word" }} //overflow-wrap: break-word;
                >
                  {/* {choice} */}
                  {$("<textarea />").html(choice).text()}
                </Button>
              ))}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt="10px"
          >
            <Button
              variant="solid"
              colorScheme="pink"
              onClick={() => history.push("/")}
            >
              Quit
            </Button>
            <Button variant="solid" colorScheme="blue" onClick={handleNext}>
              Next Question
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Question;
