import { extendTheme } from "@chakra-ui/react";
export const networthyTheme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple",
      },
    },
  },
});
