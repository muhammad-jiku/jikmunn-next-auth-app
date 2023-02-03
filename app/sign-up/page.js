import SignUp from '@/components/Auth/SignUp/SignUp';
import Head from 'next/head';
import React from 'react';

const Page = () => {
  return (
    <>
      <Head>
        <title>Jikmunn Next Auth - Create account</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp />
    </>
  );
};

export default Page;
