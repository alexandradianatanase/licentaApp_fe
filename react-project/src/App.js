import { ChakraProvider, Box, Image, Text } from "@chakra-ui/react";
import Header from "./components/layout/Header/Header.tsx";
import Footer from "./components/layout/Footer/Footer.tsx";
import CustomButton from "./components/common/Button.tsx";
import image1 from "./assets/homepageImg1.png";
import theme from "./theme";

function App() {
  const handleRedirect = () => {
    window.location.href = "https://v2.chakra-ui.com/docs/components/input";
  };

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Image src={image1} alt="Homepage image" width="100%" />
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
          <CustomButton onClick={handleRedirect}>Button</CustomButton>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
