import { useRouter } from "next/router";
import { NavigationBarComponent } from "../NavigationBarComponent";
import { Link } from "../NavigationBarComponent/types";

export const CharacterNavBarComponent: React.FC = () => {
  const { query } = useRouter();

  const { character } = query;

  const links: Link[] = [
    { url: `/characters/${character}`, label: "Personagem" },
    { url: `/characters/${character}/inventory`, label: "Inventário" },
    {
      url: `/characters/${character}/abilities-and-rituals`,
      label: "Habilidades & Rituais",
    },
  ];

  return <NavigationBarComponent links={links} />;
};
