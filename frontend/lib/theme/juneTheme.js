import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import typography from "./typograpy";

const overrides = {
  ...typography
};

const juneTheme = extendTheme(overrides);

export default juneTheme;
