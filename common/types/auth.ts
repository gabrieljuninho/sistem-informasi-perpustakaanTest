import { ReactNode } from "react";

export interface ICardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  headerDescription: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export interface IHeaderProps {
  label: string;
  description: string;
}

export interface IBackButtonProps {
  href: string;
  label: string;
}
