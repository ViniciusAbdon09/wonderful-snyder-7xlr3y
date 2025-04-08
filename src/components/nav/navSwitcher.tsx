import { ChevronsUpDown, Plus } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export interface NavSwitcherItem {
  title: string;
  description: string;
  avatar: string;
}

export interface NavSwitcherProps {
  title: string;
  items: NavSwitcherItem[];
  item: NavSwitcherItem;
  onChange(item: NavSwitcherItem): void;
}

export function NavSwitcher({
  title,
  items,
  item,
  onChange,
}: NavSwitcherProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <div className="flex size-8 items-center justify-center rounded-md">
                <Avatar className="size-8">
                  <AvatarImage src={item.avatar} />
                </Avatar>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{item.title}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {item.description}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              {title}
            </DropdownMenuLabel>
            {items.map((item) => (
              <DropdownMenuItem
                key={item.title}
                onClick={() => onChange(item)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center">
                  <Avatar className="size-6">
                    <AvatarImage src={item.avatar} />
                  </Avatar>
                </div>
                {item.title}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Adicionar empresa
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
