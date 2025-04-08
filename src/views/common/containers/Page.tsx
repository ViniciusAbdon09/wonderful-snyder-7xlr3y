import { BarChart, Users } from "lucide-react";
import { PropsWithChildren, useCallback, useMemo } from "react";
import { useLocation } from "wouter";

import { Navbar } from "@/components/nav/navBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


import { Routes } from "@/router/Routes";
import { NavMainItem } from "@/components/nav/navMain";


export default function Page({ children }: PropsWithChildren) {
  const logout = useCallback(() => {
    // TODO implement logout functionality
    console.log('implementar logout')
  }, []);

  const [location] = useLocation();

  const items = useMemo(
    (): NavMainItem[] => [
      {
        icon: BarChart,
        isActive: location.includes(Routes.DASHBOARD),
        items: [
          {
            title: "Estatísticas",
            url: Routes.DASHBOARD,
          },
        ],
        title: "Dashboard",
        url: Routes.DASHBOARD,
      },
      {
        icon: Users,
        isActive: location.includes(Routes.USERS),
        items: [
          {
            title: "Lista de Usuários",
            url: Routes.USERS,
          },
        ],
        title: "Usuários",
        url: Routes.USERS,
      },
    ],
    [location],
  );

  return (
    <SidebarProvider>
      <Navbar
        main={{
          items,
        }}
        user={{
          name: "Vinícius Abdon",
          email: "abdon29@outlook.com.br",
          avatar: "https://github.com/VAbdon09.png",
          onLogout: logout,
        }}
      />
      <SidebarInset className="flex w-full items-center">
        <div className="flex flex-1 flex-col mt-8 p-4 pt-0 bg-background max-w-[1920px] w-full mx-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
