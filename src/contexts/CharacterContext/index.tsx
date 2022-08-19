import { createContext } from "react";
import { CharacterContextData, CharacterContextProviderProps } from "./types";

const CharacterContext = createContext({} as CharacterContextData);

export const CharacterContextProvider: React.FC<
  CharacterContextProviderProps
> = ({ children }) => {
  return (
    <CharacterContext.Provider value={{}}>{children}</CharacterContext.Provider>
  );
};
