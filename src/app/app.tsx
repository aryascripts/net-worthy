import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import React from "react";
import { Router } from "wouter";
import { Header } from "./molecules/Header";
import { RouteContainer } from "./pages/RouteContainer";
import { networthyTheme } from "./theme";

export const App: React.FC = (_props) => (
  <ChakraProvider theme={networthyTheme}>
    <Router base="/main_window">
      <Header />
      <RouteContainer />
    </Router>
  </ChakraProvider>
);
