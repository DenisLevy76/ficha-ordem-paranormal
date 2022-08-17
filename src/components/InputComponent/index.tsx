import { InputHTMLAttributes } from "react";

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  label,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <input
        id={id}
        {...otherProps}
        className="bg-grey-900 text-base py-3 px-5"
      />
    </div>
  );
};
