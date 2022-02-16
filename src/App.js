import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Box
        bgImage="url('./background.png')"
        minH="100vh"
        border="8px solid gray"
        margin="5px"
        padding="5px"
      >
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Switch>
      </Box>
      <footer
        style={{
          textAlign: "center",
          fontFamily: "Montserrat",
        }}
      >
        <small>&copy; Copyright Sri Pujari</small>
      </footer>
    </>
  );
}

export default App;
