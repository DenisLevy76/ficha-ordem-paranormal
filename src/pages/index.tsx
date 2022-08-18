import type { NextPage } from "next";
import Head from "next/head";

import { AttributesContainerComponent } from "../components/AttributesContainerComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { SectionComponent } from "../components/SectionComponent";
import { SkillsComponent } from "../components/SkillsComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      <HeaderComponent />
      <main className="flex flex-col p-2 lg:px-16 lg:py-8 gap-16">
        <AttributesContainerComponent />
        <SectionComponent icon="skills" title="Perícias">
          <div className="flex">
            <SkillsComponent id="Atletismo" initialValue="0" name="a (AGI)" />
          </div>
        </SectionComponent>
        <SectionComponent icon="description" title="Anotações">
          <div className="flex flex-1 w-full h-full p-2">
            <textarea
              name="description"
              id="description"
              className="bg-grey-900 resize-none flex-1 rounded p-2 outline-none border border-grey-600 min-h-screen lg:min-h-0 h-full"
              placeholder="Anotações..."
            />
          </div>
        </SectionComponent>
      </main>
    </div>
  );
};

export default Home;
