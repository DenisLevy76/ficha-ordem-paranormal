import { ReactNode } from "react";

export interface ContainerComponentProps {
  children: ReactNode;
}

export const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
}) => {
  return (
    <section className="flex flex-1 max-h-[450px] overflow-auto rounded bg-grey-700 w-full">
      {children}
    </section>
  );
};
