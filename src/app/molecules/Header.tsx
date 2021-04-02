import { Button } from "@chakra-ui/button";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/layout";
import { Box, Image, space } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";
import useLocation from "wouter/use-location";
import { BASE_PATH } from "../config/routes";
//@ts-ignore
import Logo from "./../assets/logo.png";

export const Header = () => {
  const buttonProps = {
    size: "md",
    variant: "ghost",
    colorScheme: "purple",
  };
  const [location] = useLocation({ base: `/${BASE_PATH}` });

  return (
    <Flex>
      <Image src={Logo} h={42} marginRight={2} />
      <Link href="/">
        <Button tabIndex={0} isActive={location === `/`} {...buttonProps}>
          Dashboard
        </Button>
      </Link>
      <Link href="/accounts">
        <Button
          tabIndex={1}
          isActive={location.startsWith(`/accounts`)}
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
    </Flex>
  );
};
