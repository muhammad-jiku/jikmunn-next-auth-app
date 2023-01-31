'use client';

import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';

const SignUp = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Sign Up</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div
          // className={styles.input_group}
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              // className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div
          // className={styles.input_group}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              // className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div
          // className={styles.input_group}
          >
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              // className={styles.input_text}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div
          // className={styles.input_group}
          >
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="cpassword"
              placeholder="Confirm Password"
              // className={styles.input_text}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button
              type="submit"
              // className={styles.button}
            >
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{' '}
          <Link href={'/sign-in'}>
            <span className="text-blue-700">Sign In</span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
