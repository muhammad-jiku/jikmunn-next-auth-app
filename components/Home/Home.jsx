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
              <Link href={'/sign-in'}>
                <button className="btn btn-primary mt-5 px-10 py-1 rounded-sm">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
