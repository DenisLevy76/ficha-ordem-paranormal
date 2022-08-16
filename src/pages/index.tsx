import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  return <div>Home</div>;
};

export default Home;
