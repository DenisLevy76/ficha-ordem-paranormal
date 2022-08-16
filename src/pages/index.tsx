import type { NextPage } from "next";
import Head from "next/head";

import { HeaderComponent } from "../components/HeaderComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      <HeaderComponent />
    </div>
  );
};

export default Home;
