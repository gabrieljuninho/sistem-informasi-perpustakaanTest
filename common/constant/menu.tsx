import {
  BookDown,
  BookText,
  BookUp,
  FileBarChart2,
  LayoutDashboard,
  UserRound,
  Users,
} from "lucide-react";

import { MenuItemProps } from "@/common/types/menu";

export const MAIN_MENU_ITEMS: MenuItemProps[] = [
  {
    href: "/dashboard",
    title: "Dashboard",
    label: "",
    icon: <LayoutDashboard className="mr-2 h-[18px] w-[18px]" />,
  },
  {
    href: "/",
    title: "Data Anggota",
    label: "",
    icon: <UserRound className="mr-2 h-[18px] w-[18px]" />,
  },
  {
    href: "/data-buku",
    title: "Data Buku",
    label: "",
    icon: <BookText className="mr-2 h-[18px] w-[18px]" />,
  },
  {
    href: "/",
    title: "Data Pengunjung",
    label: "",
    icon: <Users className="mr-2 h-[18px] w-[18px]" />,
  },
];

export const TRANSACTION_MENU_ITEMS: MenuItemProps[] = [
  {
    href: "/",
    title: "Peminjaman Buku",
    label: "",
    icon: <BookUp className="mr-2 h-[18px] w-[18px]" />,
  },
  {
    href: "/",
    title: "Pengembalian Buku",
    label: "",
    icon: <BookDown className="mr-2 h-[18px] w-[18px]" />,
  },
];

export const REPORT_MENU_ITEMS: MenuItemProps[] = [
  {
    href: "/",
    title: "Laporan",
    label: "",
    icon: <FileBarChart2 className="mr-2 h-[18px] w-[18px]" />,
  },
];
