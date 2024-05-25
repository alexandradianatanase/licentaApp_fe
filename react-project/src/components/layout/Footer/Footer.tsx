import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="secondary.500" color="white" py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mx="auto"
        px={4}
      >
        <Text mb={{ base: 2, md: 0 }}>
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Text>
        <Flex>
          <Link href="#" mr={4} color="white">
            Privacy Policy
          </Link>
          <Link href="#" mr={4} color="white">
            Terms of Service
          </Link>
          <Link href="#" color="white">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
