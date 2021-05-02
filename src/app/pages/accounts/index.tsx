import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { AddEditAccount } from "../accounts-form";
import { Link } from "react-router-dom";

export const AccountsPage: React.FC = () => {
  return (
    <>
      <Flex>
        <Heading>Accounts</Heading>
        <Spacer />
        <Link to="/accounts/new">
          <Button type="button" variant="solid">
            New Account
          </Button>
        </Link>
      </Flex>
    </>
  );
};
