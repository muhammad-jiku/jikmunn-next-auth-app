import HomePage from '@/components/Home/Home';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';

const Home = ({ session }) => {
  return (
    <>
      <Head>
        <title>Jikmunn Next Auth</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage session={session} />
    </>
  );
};

export default Home;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
