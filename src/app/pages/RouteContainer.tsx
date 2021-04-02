import { Box } from "@chakra-ui/react";
import React from "react";
import { AccountsPage } from "./accounts";
import { DashboardPage } from "./dashboard";
import { Switch, Route } from "react-router-dom";
import { AddEditAccount } from "./accounts-form";

export const RouteContainer: React.FC = (_props) => {
  return (
    <Box>
      <Switch>
        <Route path="/accounts/new" component={AddEditAccount} />
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/" component={DashboardPage} />
      </Switch>
    </Box>
  );
};
