import { Route } from "wouter";
import { Switch } from "wouter";

import { NotFound } from "@/router/NotFound";
import { Routes } from "@/router/Routes";
import { Users } from "@/views/private/users/routes/users/Users";
import Page from "@/views/common/containers/Page";
import { Dashboard } from "@/views/private/dashboard/routes/dashboard/Dashboard";

export function PrivateRouter() {
  return (
    <Page>
      <Switch>
        <Route component={Users} path={Routes.USERS} />
        <Route component={Dashboard} path={Routes.DASHBOARD} />
        <NotFound to={Routes.USERS} />
      </Switch>
    </Page>
  );
}
