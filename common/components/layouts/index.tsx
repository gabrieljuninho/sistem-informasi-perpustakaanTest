import { FC } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/common/components/layouts/navbar";
import Sidebar from "@/common/components/layouts/sidebar";

import { ILayoutProps } from "@/common/types";

const Layouts: FC<ILayoutProps> = ({ children }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="ml-sidebar flex w-main flex-col">
          <Navbar />
          <main className="px-6 pt-4">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Layouts;
