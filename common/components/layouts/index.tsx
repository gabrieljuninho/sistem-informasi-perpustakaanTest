import { FC } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";

import Sidebar from "@/common/components/layouts/sidebar";

import { ILayoutProps } from "@/common/types";

const Layouts: FC<ILayoutProps> = ({ children }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="ml-sidebar w-main px-6 pt-4">{children}</main>
      </div>
    </TooltipProvider>
  );
};

export default Layouts;
