import classNames from "classnames";
import { ContainerComponentProps } from "./types";

export const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
  className,
}) => {
  return (
    <section
      className={classNames(
        "flex flex-1 xl:max-h-[450px] rounded bg-grey-700 w-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
