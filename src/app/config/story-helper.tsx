import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import React from "react";
import { networthyTheme } from "./../theme";

export const StoryHelper: React.FC = (props) => (
  <ChakraProvider theme={networthyTheme}>{props.children}</ChakraProvider>
);
