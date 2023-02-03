'use client';

import React from 'react';

// internal imports
import Link from 'next/link';
import Spinner from '../Shared/Spinner/Spinner';

// external imports
import { useSession } from 'next-auth/react';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';

const HomePage = async () => {
  const { data: session, status } = useSession();
  // const session = await getServerSession(authOptions);
  // const sessionData = JSON.stringify(session, null, 2);
  // console.log('session data ', sessionData);
  console.log('session data ', session);

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
                {session ? (
                  <>
                    <h1 className="text-2xl font-bold">
                      Hello, {sessionData?.user?.email}, We welcome you here!
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold">
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
