import type { NextPage } from "next";
import Head from "next/head";

import { AttributesContainerComponent } from "../components/AttributesContainerComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { SectionComponent } from "../components/SectionComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      <HeaderComponent />
      <main className="flex flex-col p-2 lg:px-16 lg:py-8 gap-16">
        <AttributesContainerComponent />
        <SectionComponent icon="skills" title="Perícias"></SectionComponent>
      </main>
    </div>
  );
};

export default Home;
