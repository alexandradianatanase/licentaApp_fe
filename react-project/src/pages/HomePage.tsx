import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Button from "../components/common/Button";

const HomePage: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = "https://v2.chakra-ui.com/docs/components/input";
  };
  return (
    <>
      <Box>
        <Image
          src="/images/homepageImg1.png"
          alt="Homepage image"
          width="100%"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Text color="white" fontSize="65px" fontWeight="bold">
            Let's plan together!
          </Text>
          <Button onClick={handleRedirect}>Button</Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
