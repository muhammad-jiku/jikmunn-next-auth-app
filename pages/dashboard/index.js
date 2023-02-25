import React from 'react';

// internal imports
import Head from 'next/head';
import Dashboard from '@/components/Dashboard/Dashboard';

// external imports
import { getSession, useSession } from 'next-auth/react';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../api/auth/[...nextauth]';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Jikmunn Next Auth - Dashboard</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
};

export default DashboardPage;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
        premanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}