import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data } = useSession();
  return (
    <div>
      <Head>
        <title>Tabletop RPG - Ordem paranormal</title>
      </Head>
      Home
    </div>
  );
};

export default Home;
