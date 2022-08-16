import { Heart } from "phosphor-react";
import { useState } from "react";
import { ButtonComponent } from "../ButtonComponent";

export interface ICharacterStatusComponentProps {
  maxLife: number;
  currentLife: number;
  status: "life" | "stamina" | "effort";
}

export const CharacterStatusComponent: React.FC<
  ICharacterStatusComponentProps
> = ({ maxLife, currentLife }) => {
  const [currentLifeState, setCurrentLifeState] = useState(currentLife);
  return (
    <div className="flex">
      <ButtonComponent
        disabled={currentLifeState <= 0}
        onClick={() =>
          currentLifeState > 0 && setCurrentLifeState(currentLifeState - 1)
        }
      >
        -
      </ButtonComponent>
      <span className="flex w-full p-3 border rounded border-red-500 justify-center items-center">
        <Heart className="text-red-500 text-lg" weight="bold" />
        <p className="text-red-500">
          {currentLifeState}/{maxLife}
        </p>
      </span>
      <ButtonComponent
        disabled={currentLifeState >= maxLife}
        onClick={() =>
          currentLifeState < maxLife &&
          setCurrentLifeState(currentLifeState + 1)
        }
      >
        +
      </ButtonComponent>
    </div>
  );
};
