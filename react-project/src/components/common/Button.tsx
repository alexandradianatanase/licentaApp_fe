import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const Button: React.FC<ButtonProps> = (props) => {
  return <ChakraButton {...props}>{props.children}</ChakraButton>;
};

export default Button;
