import { REPORTS } from "@/common/mock/dashboard";

import { IDashboardProps } from "@/common/types/dashboard";

import CardItem from "@/common/components/dashboard/card-item";

const DashboardPage = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {REPORTS.map((item: IDashboardProps, index: number) => (
        <CardItem key={index} {...item} />
      ))}
    </div>
  );
};

export default DashboardPage;
