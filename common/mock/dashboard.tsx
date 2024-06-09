import { BookText, UserRound, Users } from "lucide-react";

import { IDashboardProps } from "@/common/types/dashboard";

export const REPORTS: IDashboardProps[] = [
  {
    title: "Total Anggota",
    icon: <UserRound className="h-5 w-5 text-muted-foreground" />,
    total: 10,
    flow: "+20.1% from last month",
  },
  {
    title: "Total Buku",
    icon: <BookText className="h-5 w-5 text-muted-foreground" />,
    total: 20,
    flow: "+20.1% from last month",
  },
  {
    title: "Total Pengunjung",
    icon: <Users className="h-5 w-5 text-muted-foreground" />,
    total: 30,
    flow: "+20.1% from last month",
  },
];
