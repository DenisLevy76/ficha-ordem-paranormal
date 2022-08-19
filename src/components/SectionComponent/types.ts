import { ReactNode } from "react";

export interface SectionComponentProps {
  title: string;
  children?: ReactNode;
  icon: "description" | "skills" | "inventory";
}
