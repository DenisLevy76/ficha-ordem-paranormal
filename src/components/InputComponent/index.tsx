import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  label,
  className,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-base">
          {label}
        </label>
      )}
      <input
        id={id}
        {...otherProps}
        className={classNames(
          "bg-grey-900 text-base py-3 px-5 rounded",
          className
        )}
      />
    </div>
  );
};
