import classNames from "classnames";
import { ReactNode } from "react";

export interface ContainerComponentProps {
  children?: ReactNode;
  className?: string;
}

export const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
  className,
}) => {
  return (
    <section
      className={classNames(
        "flex flex-1 lg:max-h-[450px] rounded bg-grey-700 w-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
