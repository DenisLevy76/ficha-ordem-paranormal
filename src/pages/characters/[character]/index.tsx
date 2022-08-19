import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, startTransition, useState } from "react";

import { AttributesContainerComponent } from "../../../components/AttributesContainerComponent";
import { InputComponent } from "../../../components/InputComponent";
import { SectionComponent } from "../../../components/SectionComponent";
import { SkillsComponent } from "../../../components/SkillsComponent";

const Home: NextPage = () => {
  const [skillFilterValue, setSkillFilterValue] = useState<string>("");
  const [skillFilter, setSkillFilter] = useState<string>("");

  const { query } = useRouter();
  const { character } = query;

  const skills: {
    id: string;
    initialValue: string;
    name: string;
    mainAttribute: string;
  }[] = [
    {
      id: "athletics",
      initialValue: "0",
      name: "Atletismo",
      mainAttribute: "AGI",
    },
    {
      id: "athletics2",
      initialValue: "0",
      name: "Atletismo",
      mainAttribute: "AGI",
    },
    {
      id: "tamer1",
      initialValue: "+5",
      name: "Adestramento",
      mainAttribute: "PRE",
    },
  ].filter((skill) =>
    skill.name.toLowerCase().includes(skillFilter.toLowerCase())
  );

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillFilterValue(event.target.value);
    startTransition(() => setSkillFilter(event.target.value));
  };

  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      <main className="flex flex-col p-2 xl:px-16 xl:py-8 gap-16">
        <AttributesContainerComponent />
        <SectionComponent icon="skills" title="Perícias">
          <header className="flex justify-center p-3 border-b border-grey-600">
            <InputComponent
              id="search"
              placeholder="🔍 Pesquisar perícia"
              type="search"
              className="text-center"
              onChange={handleFilter}
              value={skillFilterValue}
            />
          </header>
          <div className="flex p-4 flex-wrap gap-2 max-h-[450px] transition overflow-auto ease-in-out duration-400">
            {skills.map((skill) => (
              <SkillsComponent
                id={skill.id}
                initialValue={skill.initialValue}
                name={skill.name}
                mainAttribute={skill.mainAttribute}
                key={skill.id}
              />
            ))}
          </div>
        </SectionComponent>
        <SectionComponent icon="description" title="Anotações">
          <div className="flex flex-1 w-full h-full p-4">
            <textarea
              name="description"
              id="description"
              className="bg-grey-900 resize-none flex-1 rounded p-2 outline-none border border-grey-600 min-h-screen xl:min-h-0 h-full"
              placeholder="Anotações..."
            />
          </div>
        </SectionComponent>
      </main>
    </div>
  );
};

export default Home;
