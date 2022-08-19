import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { HeaderComponent } from "../components/HeaderComponent";
import { CharacterContextProvider } from "../contexts/CharacterContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CharacterContextProvider>
        <HeaderComponent />
        <Component {...pageProps} />
      </CharacterContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
