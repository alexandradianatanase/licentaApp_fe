import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { breakpoints } from "./breakpoints";
import buttonTheme from "./components/common/button";

const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  components: { Button: buttonTheme },
});

export default theme;
