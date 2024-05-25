import React from "react";
import { Flex, Box, Link, Button } from "@chakra-ui/react";
import SearchBar from "../../common/SearchBar";

const Header: React.FC = () => {
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
      zIndex="999" // bigger z-index to make sure other elements does not overlap
    >
      <Box>
        {/* <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} /> */}
      </Box>
      <SearchBar />
      <Flex alignItems="center">
        <Link mr={4}>Despre noi</Link>
        <Link mr={4}>Servicii</Link>
        <Link mr={4}>Link 3</Link>
        <Link mr={4}>Link 4</Link>
        <Button>Sign in</Button>
        <Button>Register</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
