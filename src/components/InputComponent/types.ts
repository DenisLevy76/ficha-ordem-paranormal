import { InputHTMLAttributes } from "react";

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}
