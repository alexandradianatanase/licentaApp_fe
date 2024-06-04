import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BecomeProviderPage from "./pages/BecomeProviderPage";
import NoPageFound from "./pages/NoPageFound";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/become-provider" element={<BecomeProviderPage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* No Page Found */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
