import { AttributesComponent } from "../AttributesComponent";
import { ButtonComponent } from "../ButtonComponent";
import { CharacterStatusComponent } from "../CharacterStatusComponent";
import { ContainerComponent } from "../ContainerComponent";
import { InputComponent } from "../InputComponent";

export const AttributesContainerComponent: React.FC = () => {
  return (
    <ContainerComponent>
      <div className="flex flex-1 lg:flex-row flex-col">
        <aside>
          <AttributesComponent />
        </aside>
        <div className="p-2 md:p-5 lg:grid flex flex-col gap-4 lg:grid-cols-2 flex-1 lg:gap-16">
          <div className="flex flex-col gap-4">
            <CharacterStatusComponent
              currentValue={14}
              maxValue={16}
              status="life"
              label="Vida"
            />
            <CharacterStatusComponent
              currentValue={14}
              maxValue={16}
              status="sanity"
              label="Sanidade"
            />
            <CharacterStatusComponent
              currentValue={14}
              status="effort"
              label="Esforço"
            />
          </div>
          <div className="flex flex-col gap-4">
            <InputComponent
              id="Character"
              label="Personagem"
              placeholder="Gree, o ganancioso"
            />
          </div>
        </div>
        <ButtonComponent className="bg-green-500 hover:bg-green-700">
          Editar
        </ButtonComponent>
      </div>
    </ContainerComponent>
  );
};
