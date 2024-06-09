"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import { MenuItemProps } from "@/common/types/menu";

const MenuItem: FC<MenuItemProps> = ({ ...item }) => {
  const pathName = usePathname();

  const url = new URL(item.href, "http://localhost:3000");

  const activeLink = pathName === url.pathname;

  return (
    <Link
      href={item.href}
      className={cn(
        buttonVariants({
          variant: activeLink ? "default" : "ghost",
          size: "sm",
        }),
        activeLink &&
          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
        "justify-start"
      )}
    >
      {item.icon}
      <span className="text-sm">{item.title}</span>
      {item.label && (
        <span
          className={cn(
            "ml-auto",
            activeLink && "text-background dark:text-white"
          )}
        >
          {item.label}
        </span>
      )}
    </Link>
  );
};

export default MenuItem;
