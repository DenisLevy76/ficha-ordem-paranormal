import { ReactNode } from "react";

export interface SkillsComponentProps {
  id: string;
  name: ReactNode;
  mainAttribute: string;
  initialValue?: string;
}
