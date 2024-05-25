import { Box, Button, Image } from "@chakra-ui/react";
import Header from "./components/layout/Header/Header.tsx";
import Footer from "./components/layout/Footer/Footer.tsx";
import image1 from "./assets/homepageImg1.png";

function App() {
  return (
    <Box>
      <Header />
      <Image src={image1} alt="Homepage image" width="100%" />
      <Button bg="primary.500" color="white">
        Button
      </Button>
      <Footer />
    </Box>
  );
}

export default App;
