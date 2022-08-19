import { useState } from "react";
import { InputComponent } from "../InputComponent";
import { SkillsComponentProps } from "./types";

export const SkillsComponent: React.FC<SkillsComponentProps> = ({
  id,
  name,
  mainAttribute,
  initialValue = "0",
}) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="flex items-center bg-grey-900 pl-5 min-w-[250px] justify-between rounded">
      <label htmlFor={id} className="cursor-pointer">
        {name} ({mainAttribute})
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
