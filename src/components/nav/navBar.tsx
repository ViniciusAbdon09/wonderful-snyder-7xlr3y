import * as React from "react";

import { NavMain, NavMainProps } from "@/components/nav/navMain";
import { NavUser, NavUserProps } from "@/components/nav/navUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

export interface NavbarProps extends React.ComponentProps<typeof Sidebar> {
  main: NavMainProps;
  user: NavUserProps;
}

export function Navbar({ main, user, ...props }: NavbarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain {...main} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser {...user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
