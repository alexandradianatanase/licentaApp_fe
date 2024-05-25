import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <ChakraButton
      borderRadius="10px"
      padding="20px"
      bg="white"
      color="black"
      _hover={{ bg: "gray.200" }}
      {...props}
    >
      {props.children}
    </ChakraButton>
  );
};

export default CustomButton;
