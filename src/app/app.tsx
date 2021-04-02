import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import React from "react";
import { Header } from "./organisms/Header";
import { RouteContainer } from "./pages/RouteContainer";
import { networthyTheme } from "./theme";
import { HashRouter } from "react-router-dom";

export const App: React.FC = (_props) => (
  <ChakraProvider theme={networthyTheme}>
    <HashRouter>
      <Header />
      <RouteContainer />
    </HashRouter>
  </ChakraProvider>
);
