import { Box, Center, Divider } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      textTransform="uppercase"
      display="flex"
      flexDirection="column"
      alignItems="center"
      //justifyContent="center"
      fontSize="6vw"
      fontFamily="Montserrat"
      cursor="pointer"
    >
      <Link to="/">All That Quiz</Link>

      <hr
        style={{
          width: "100%",
          borderTop: "1px solid black",
        }}
      />
    </Box>
  );
};

export default Header;
