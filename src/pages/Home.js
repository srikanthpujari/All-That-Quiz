import {
  Box,
  Button,
  Image,
  Input,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizState } from "../context/QuizProvider";
import Categories from "../data/Categories";

const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const {
    name,
    setName,
    setQuestions,
    numofQuestions,
    setNumOfQuestions,
    setScore,
  } = QuizState();

  //const numberOfQuestions = Array.from(Array(51).keys());
  const numberOfQuestions = Array.from({ length: 51 }, (_, index) => {
    return index;
  });

  numberOfQuestions.shift();

  const toast = useToast();
  const history = useHistory();

  const handleSubmit = () => {
    if (!name || !category || !difficulty || !numofQuestions) {
      toast({
        title: "Error!",
        description: "Please fill all the Fields",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      });

      return;
    }

    fetchQuestions();
    history.push("/quiz");
  };

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${numofQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
      );

      setQuestions(data.results);
      console.log(data.results);
      setScore(0);
    } catch (error) {
      toast({
        title: "Error!",
        description: "Error while fetching Questions",
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
        justifyContent={{ md: "space-around" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="10px"
          marginTop="10px"
          fontFamily="Montserrat"
          fontSize={{ base: "2xl", md: "4xl" }}
          width={{ base: "100%", md: "45%" }}
        >
          <Text> Quiz Settings</Text>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            padding="20px"
          >
            <VStack spacing={{ base: "10px", md: "45px" }}>
              <Input
                _placeholder={{ color: "black" }}
                placeholder="Enter your name"
                variant="outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Select
                color="black"
                placeholder="Select Category"
                variant="outline"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {Categories.map((category) => (
                  <option key={category.category} value={category.value}>
                    {category.category}
                  </option>
                ))}
              </Select>
              <Select
                color="black"
                placeholder="Select Difficulty"
                variant="outline"
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <option value="easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Select>
              <Select
                color="black"
                placeholder="Select Number of Questions"
                variant="outline"
                onChange={(e) => setNumOfQuestions(e.target.value)}
                value={numofQuestions}
              >
                {numberOfQuestions.map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </Select>
              <Button colorScheme="blue" width="100%" onClick={handleSubmit}>
                Start Quiz
              </Button>
            </VStack>
          </Box>
        </Box>
        <Image
          width={{ base: "85%", md: "55%" }}
          padding={{ base: "0" }}
          src="/quiz.svg"
          alt="Quiz Image"
          alignSelf="center"
        />
      </Box>
    </>
  );
};

export default Home;
