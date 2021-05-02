import { Button } from "@chakra-ui/button";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Box, Image, space } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BASE_PATH } from "../config/routes";
//@ts-ignore
import Logo from "./../assets/logo.png";

export const Header = () => {
  const location = useLocation();
  const buttonProps = {
    size: "md",
    variant: "ghost",
  };

  return (
    <Flex marginBottom={2}>
      <Image src={Logo} h={42} marginRight={2} />
      <Link to="/">
        <Button
          tabIndex={0}
          isActive={location.pathname === "/"}
          {...buttonProps}
        >
          Dashboard
        </Button>
      </Link>
      <Link to="accounts">
        <Button
          tabIndex={1}
          isActive={location.pathname.startsWith("/accounts")}
          {...buttonProps}
        >
          Accounts
        </Button>
      </Link>

      <Spacer />

      <SettingsIcon
        tabIndex={2}
        cursor="pointer"
        color={"purple.500"}
        w={6}
        h={6}
      />
      {}
    </Flex>
  );
};
