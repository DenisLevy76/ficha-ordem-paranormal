import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { HeaderComponent } from "../components/HeaderComponent";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <HeaderComponent />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
