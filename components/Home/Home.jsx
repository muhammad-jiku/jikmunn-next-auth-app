'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const HomePage = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      {status === 'loading' ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <main className="container mx-auto text-center py-20">
            <div className="flex justify-center">
              {session ? (
                <>
                  <h1 className="text-2xl font-bold">
                    Hello, {session?.user?.email}, We welcome you here!
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold">
                    {' '}
                    Please Sign in to see welcome message
                  </h1>
                  <br />
                  <button className="btn btn-primary mx-2 px-2 rounded-sm">
                    <Link href={'/sign-in'}>Sign In</Link>
                  </button>
                </>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default HomePage;
