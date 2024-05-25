import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { breakpoints } from "./breakpoints";

const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
});

export default theme;
