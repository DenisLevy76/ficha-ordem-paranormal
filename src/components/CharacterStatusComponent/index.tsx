import classNames from "classnames";
import { Brain, Heart, Lightning } from "phosphor-react";
import { useState } from "react";
import { ButtonComponent } from "../ButtonComponent";

export interface ICharacterStatusComponentProps {
  maxValue?: number;
  currentValue: number;
  status: "life" | "sanity" | "effort";
  label: string;
}

export const CharacterStatusComponent: React.FC<
  ICharacterStatusComponentProps
> = ({ maxValue, currentValue, status, label }) => {
  const statusColor = {
    life: "text-red-500 border-red-500",
    sanity: "text-blue-500 border-blue-500",
    effort: "text-orange-500 border-orange-500",
  }[status];

  const statusIcon = {
    life: <Heart className={`${statusColor} text-lg`} weight="bold" />,
    sanity: <Brain className={`${statusColor} text-lg`} weight="bold" />,
    effort: <Lightning className={`${statusColor} text-lg`} weight="bold" />,
  }[status];

  const [currentValueState, setCurrentValueState] = useState(currentValue);

  return (
    <div className="flex flex-col text-center">
      <span>{label}</span>
      <div className="flex gap-1">
        <ButtonComponent
          disabled={currentValueState <= 0}
          onClick={() =>
            currentValueState > 0 && setCurrentValueState(currentValueState - 1)
          }
        >
          -
        </ButtonComponent>
        <span
          className={classNames(
            "flex w-full p-2 border rounded justify-center items-center gap-2",
            statusColor
          )}
        >
          {statusIcon}
          <p className={statusColor}>
            {`${currentValueState}${maxValue ? `/${maxValue}` : ""}`}
          </p>
        </span>
        <ButtonComponent
          disabled={!!maxValue && currentValueState >= maxValue}
          onClick={() =>
            maxValue &&
            currentValueState < maxValue &&
            setCurrentValueState(currentValueState + 1)
          }
        >
          +
        </ButtonComponent>
      </div>
    </div>
  );
};
