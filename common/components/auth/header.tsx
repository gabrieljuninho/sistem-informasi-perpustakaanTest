import { FC } from "react";

import { IHeaderProps } from "@/common/types/auth";

const Header: FC<IHeaderProps> = ({ description, label }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">{label}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Header;
