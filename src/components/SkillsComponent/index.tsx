import { ReactNode, useState } from "react";
import { InputComponent } from "../InputComponent";

export interface SkillsComponentProps {
  id: string;
  name: ReactNode;
  initialValue: string;
}

export const SkillsComponent: React.FC<SkillsComponentProps> = ({
  id,
  name,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex items-center bg-grey-900 pl-5 min-w-[250px] justify-between">
      <label htmlFor={id} className="cursor-pointer">
        {name}
      </label>
      <InputComponent
        type="text"
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-20 text-center outline-none"
      />
    </div>
  );
};
