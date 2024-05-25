import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar: React.FC = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  return (
    <Box position="relative" display="flex" alignItems="center">
      <Icon
        as={SearchIcon}
        color={theme.colors.gray[500]}
        cursor="pointer"
        onClick={handleToggleExpand}
        zIndex={2}
        position="absolute"
        right="0.5em"
        top="50%"
        transform="translateY(-50%)"
      />
      <InputGroup>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          bg="transparent"
          color="white"
          _placeholder={{ color: "white" }}
          border="1px solid white"
          onBlur={() => setIsExpanded(false)}
          onFocus={handleInputFocus}
          width={isExpanded ? "200px" : "0"}
          transition="width 0.3s ease, padding 0.3s ease"
          paddingLeft={isExpanded ? "2em" : "0"}
          opacity={isExpanded ? 1 : 0}
          visibility={isExpanded ? "visible" : "hidden"}
          position="absolute"
          right="0"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
