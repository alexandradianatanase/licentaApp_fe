import React from "react";
import { Flex, Box, Link, Image } from "@chakra-ui/react";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleButtonClick = () => {
    navigate("/become-provider");
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="secondary.500"
      color="white"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Image
        onClick={handleLogoClick}
        src="/images/logo.png"
        alt="Logo"
        style={{ width: "100px", height: "auto" }}
      />
      <SearchBar />
      <Flex alignItems="center">
        <Button variant="primary" onClick={handleButtonClick}>
          Esti furnizor?
        </Button>
        <Link mr={4}>Servicii</Link>
        <Link mr={4}>Despre noi</Link>
        <Link mr={4}>Link 4</Link>
        <Button variant="primary">Sign in</Button>
        <Button variant="secondary">Register</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
