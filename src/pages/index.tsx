import type { NextPage } from "next";
import Head from "next/head";
import { AttributesComponent } from "../components/AttributesComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { CharacterStatusComponent } from "../components/CharacterStatusComponent";
import { ContainerComponent } from "../components/ContainerComponent";

import { HeaderComponent } from "../components/HeaderComponent";
import { InputComponent } from "../components/InputComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      <HeaderComponent />
      <main className="px-16 py-8">
        <ContainerComponent>
          <aside>
            <AttributesComponent />
          </aside>
          <div className="p-5 grid grid-cols-2 flex-1 gap-16">
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
        </ContainerComponent>
      </main>
    </div>
  );
};

export default Home;
