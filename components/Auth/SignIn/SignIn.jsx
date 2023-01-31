'use client';

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const SignIn = () => {
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="password" />
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit">Sign In</button>
          </div>
          <div className="input-button">
            <button type="submit">Sign In with Google</button>
          </div>
          <div className="input-button">
            <button type="submit">Sign In with Github</button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don&apos;t have an account yet?{' '}
          <Link href={`/sign-up`}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignIn;
