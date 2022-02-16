import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import QuizProvider from "./context/QuizProvider";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById("root")
);
