import { AttributesComponent } from "../AttributesComponent";
import { ButtonComponent } from "../ButtonComponent";
import { CharacterStatusComponent } from "../CharacterStatusComponent";
import { ContainerComponent } from "../ContainerComponent";
import { InputComponent } from "../InputComponent";

export const AttributesContainerComponent: React.FC = () => {
  return (
    <ContainerComponent>
      <div className="flex flex-1 xl:flex-row flex-col">
        <aside>
          <AttributesComponent />
        </aside>
        <div className="p-2 md:p-5 xl:grid flex flex-col gap-4 xl:grid-cols-2 flex-1 xl:gap-16 overflow-auto">
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
              id="character"
              label="Personagem"
              placeholder="Ex.: Gree, o ganancioso"
            />
            <InputComponent
              id="player"
              label="Jogador"
              placeholder="Ex.: Paulo Mateus"
            />
            <div className="flex justify-between flex-col 2xl:flex-row">
              <InputComponent
                id="origin"
                label="Origem"
                placeholder="Ex.: Amnésico"
              />
              <InputComponent id="NEX" label="NEX" placeholder="Ex.: 10%" />
            </div>
            <div className="flex flex-col 2xl:flex-row justify-between">
              <InputComponent
                id="characterClass"
                label="Classe"
                placeholder="Ex.: Amnésico"
              />
              <InputComponent
                id="movement"
                label="Deslocamento"
                placeholder="Ex.: 10%"
              />
            </div>
          </div>
        </div>
        <ButtonComponent className="bg-green-500 hover:bg-green-700">
          Editar
        </ButtonComponent>
      </div>
    </ContainerComponent>
  );
};
