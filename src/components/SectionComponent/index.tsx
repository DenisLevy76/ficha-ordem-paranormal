import { File } from "phosphor-react";
import { ReactNode } from "react";
import { ICONS } from "../../settings/icons";
import { ContainerComponent } from "../ContainerComponent";

export interface SectionComponentProps {
  title: string;
  children?: ReactNode;
  icon: "description" | "skills" | "inventory";
}

export const SectionComponent: React.FC<SectionComponentProps> = ({
  children,
  title,
  icon,
}) => {
  return (
    <ContainerComponent>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col items-center justify-center lg:py-36 py-2 px-16 bg-green-700">
          <h2 className="text-xl font-bold">{title}</h2>
          {ICONS[icon]}
        </div>
        <div>{children}a</div>
      </div>
    </ContainerComponent>
  );
};
