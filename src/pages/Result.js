import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { QuizState } from "../context/QuizProvider";

const Result = () => {
  const { score } = QuizState();
  const history = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      height="60vh"
    >
      <Text fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}>
        Final Score: {score}
      </Text>
      <Button
        variant="solid"
        colorScheme="blue"
        onClick={() => history.push("/")}
        alignSelf="center"
        mt="20px"
      >
        Goto HomePage
      </Button>
    </Box>
  );
};

export default Result;
