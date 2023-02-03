'use client';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Spinner from '../Shared/Spinner/Spinner';

const HomePage = async () => {
  const { status } = useSession();
  const session = await getServerSession(authOptions);
  const sessionData = JSON.stringify(session, null, 2);
  console.log('session data ', sessionData);

  return (
    <div>
      {status === 'loading' ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="hero min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-md">
                {sessionData ? (
                  <>
                    <h1 className="text-2xl font-bold">
                      Hello, {sessionData?.user?.email}, We welcome you here!
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold">
                      {' '}
                      Please Sign in to see welcome message
                    </h1>
                    <br />
                    <button className="btn btn-primary text-white font-bold cursor-pointer">
                      <Link href={'/sign-in'}>Sign In</Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
