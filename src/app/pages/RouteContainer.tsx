import { Box } from "@chakra-ui/react";
import React from "react";
import { AccountsPage } from "./accounts";
import { DashboardPage } from "./dashboard";
import { Switch, Route } from "react-router-dom";

export const RouteContainer: React.FC = (_props) => {
  return (
    <Box>
      <Switch>
        <Route path="/" component={DashboardPage} />
        <Route path="/accounts" component={AccountsPage} />
      </Switch>
    </Box>
  );
};
