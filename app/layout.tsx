import type { Metadata } from "next";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { geistSans } from "@/lib/fonts";

import { ILayoutProps } from "@/common/types";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<ILayoutProps>) {
  return (
    <html lang="en">
      <body className={cn("font-geist", geistSans.variable)}>{children}</body>
    </html>
  );
}
