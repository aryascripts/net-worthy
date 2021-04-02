import { Button } from "@chakra-ui/button";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Box, space } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";
import useLocation from "wouter/use-location";
import { BASE_PATH } from "../config/routes";

export const Header = () => {
  const buttonProps = {
    size: "md",
    variant: "ghost",
    colorScheme: "purple",
  };
  const [location] = useLocation({ base: `/${BASE_PATH}` });

  return (
    <Flex>
      <Link href="/">
        <Button isActive={location === `/`} {...buttonProps}>
          Dashboard
        </Button>
      </Link>
      <Link href="/accounts">
        <Button isActive={location.startsWith(`/accounts`)} {...buttonProps}>
          Accounts
        </Button>
      </Link>

      <Spacer />

      <SettingsIcon cursor="pointer" color={"purple.500"} w={6} h={6} />
    </Flex>
  );
};
