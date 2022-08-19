import { ButtonHTMLAttributes } from "react";

export interface ButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "text" | "contained";
}
