'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
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
              <h1 className="text-4xl font-bold">
                {' '}
                Please Sign in to see welcome message
              </h1>
              <button className="btn btn-primary mx-4 p-4 rounded-sm">
                <Link href={'/sign-in'}>Sign In</Link>
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
