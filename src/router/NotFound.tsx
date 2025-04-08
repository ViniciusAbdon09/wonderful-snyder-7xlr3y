import { Redirect } from "wouter";
import { Route } from "wouter";

import { Routes } from "@/router/Routes";

interface NotFoundProps {
  to: Routes;
}

export function NotFound({ to }: NotFoundProps) {
  return (
    <Route>
      <Redirect to={to} />
    </Route>
  );
}
