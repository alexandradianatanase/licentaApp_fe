import { ComponentStyleConfig } from "@chakra-ui/react";

const buttonTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "10px",
    padding: "20px",
    bg: "#FF0000",
    color: "yellow",
    _hover: {
      bg: "gray.200",
    },
  },
  sizes: {},
  variants: {
    primary: {
      bg: "#0000FF",
    },
    secondary: {
      bg: "#000000",
    },
  },
  defaultProps: {},
};

export default buttonTheme;
