import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./templates/Header";
import { networthyTheme } from "./theme";
import { Router, useLocation } from "wouter";

export const App: React.FC = (_props) => {
  const [location, setLocation] = useLocation();

  return (
    <ChakraProvider theme={networthyTheme}>
      <Router base="/main_window">
        <Header />

        {location}
      </Router>
    </ChakraProvider>
  );
};
