import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

export interface ButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "text" | "contained";
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant = "contained",
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "px-6 py-4 rounded bg-grey-500",
        disabled ? "opacity-40" : "hover:bg-grey-600"
      )}
      {...props}
    />
  );
};
