import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { ButtonComponentProps } from "./types";

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant = "contained",
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        "px-6 py-3 rounded bg-grey-500",
        disabled ? "opacity-40" : "hover:bg-grey-600",
        className
      )}
      {...props}
    />
  );
};
