import { extendTheme } from "@chakra-ui/react";

export const colorMode = {
  base: "#212329",
  borderInput: "#955d94",
  ungu: "#955d94",

  // ------ BASE COLOR GIGALAND -------- //
  greySoft: "#26292d",
  bg: "#212428",
  baseRed: "#FF343F",
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: colorMode.bg,
        color: "white",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
    Modal: {
      defaultProps: {
        isCentered: true,
      },
    },
  },
});

export default theme;
