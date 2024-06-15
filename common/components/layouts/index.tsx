"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/common/components/layouts/navbar";
import Sidebar from "@/common/components/layouts/sidebar";

import { ILayoutProps } from "@/common/types";

const Layouts: FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const hideSidebar = ["/", "/login"].includes(pathname);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen">
        {!hideSidebar && <Sidebar />}
        <div className={cn(!hideSidebar && "ml-sidebar flex w-main flex-col")}>
          {!hideSidebar && <Navbar />}
          <main className={cn(!hideSidebar && "px-6 pt-4")}>{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Layouts;
