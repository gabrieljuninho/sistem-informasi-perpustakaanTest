import Link from "next/link";

import { LibraryBig, LogOut } from "lucide-react";

import { truncateText } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  MAIN_MENU_ITEMS,
  REPORT_MENU_ITEMS,
  TRANSACTION_MENU_ITEMS,
} from "@/common/constant/menu";

import { MenuItemProps } from "@/common/types/menu";

import MenuItem from "@/common/components/layouts/sidebar/menu-item";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 w-sidebar border-r py-2">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col">
          <div className="px-4 py-2.5">
            <Link href="/" className="flex items-center gap-1 font-semibold">
              <LibraryBig className="h-6 w-6" />
              <span>SIMAPUS</span>
            </Link>
          </div>
          <Separator className="my-2" />
          <nav className="flex flex-col gap-1 px-2">
            {MAIN_MENU_ITEMS.map((item: MenuItemProps, index: number) => (
              <MenuItem {...item} key={index} />
            ))}
          </nav>
          <Separator className="my-2" />
          <nav className="flex flex-col gap-1 px-2">
            {TRANSACTION_MENU_ITEMS.map(
              (item: MenuItemProps, index: number) => (
                <MenuItem {...item} key={index} />
              )
            )}
          </nav>
          <Separator className="my-2" />
          <nav className="flex flex-col gap-1 px-2">
            {REPORT_MENU_ITEMS.map((item: MenuItemProps, index: number) => (
              <MenuItem {...item} key={index} />
            ))}
          </nav>
        </div>
        <div>
          <Separator className="my-2" />
          <div className="px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-2 py-[22px] focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <div className="flex items-center justify-start gap-2.5">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-normal leading-tight">
                        {truncateText("Gabriel Juninho Paulista", 24)}
                      </span>
                      <span className="text-xs font-normal leading-none">
                        {truncateText("202043502772", 23)}
                      </span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
