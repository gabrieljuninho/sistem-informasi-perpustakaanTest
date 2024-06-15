import { FC } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { IBackButtonProps } from "@/common/types/auth";

const BackButton: FC<IBackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
