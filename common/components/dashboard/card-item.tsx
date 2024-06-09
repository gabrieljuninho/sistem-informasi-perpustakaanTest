import { FC } from "react";

import { IDashboardProps } from "@/common/types/dashboard";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardItem: FC<IDashboardProps> = ({ ...item }) => {
  return (
    <Card className="select-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
        {item.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{item.total}</div>
        <p className="text-xs text-muted-foreground">{item.flow}</p>
      </CardContent>
    </Card>
  );
};

export default CardItem;
