import { File } from "phosphor-react";
import { ReactNode } from "react";
import { ICONS } from "../../settings/icons";
import { ContainerComponent } from "../ContainerComponent";
import { SectionComponentProps } from "./types";

export const SectionComponent: React.FC<SectionComponentProps> = ({
  children,
  title,
  icon,
}) => {
  return (
    <ContainerComponent>
      <div className="flex flex-col xl:flex-row w-full">
        <div className="flex flex-col items-center justify-center xl:py-36 py-2 px-16 bg-green-700">
          <h2 className="text-xl font-bold">{title}</h2>
          {ICONS[icon]}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </ContainerComponent>
  );
};
