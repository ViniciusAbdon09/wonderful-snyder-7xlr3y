import { ChevronsUpDown, MoonIcon, SunIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface NavUserProps {
  name: string;
  email: string;
  avatar: string;
  onLogout: () => void;
}
export function NavUser(user: NavUserProps) {
  const { theme, setTheme} = useTheme();
  const { isMobile } = useSidebar();

  const ThemeIcon = theme === "light" ? MoonIcon : SunIcon;
  const themeText = theme === "light" ? "Dark" : "Light";

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex w-full items-center gap-2 rounded-lg p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side={isMobile ? "bottom" : "right"} sideOffset={4}>
          <DropdownMenuLabel>
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <ThemeIcon className="size-4" />
              <span>{themeText}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
