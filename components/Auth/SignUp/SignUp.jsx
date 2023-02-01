'use client';

import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';

const SignUp = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  let errorMessage;

  const onSubmit = async () => {
    const username = watch('username').toLowerCase().trim();
    const email = watch('email');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    if (password !== confirmPassword) {
      console.log('Something went wrong!');
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      console.log(newUser);
      reset();
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">
              Welcome to the Jikmunn Billing. Here you can track your billing
              services cost. So, Registration now to start your journey!
            </p>
          </div> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered input-primary"
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                      // maxLength: {
                      //   value: 20,
                      //   message: 'Name can not be more than 20 letters',
                      // },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.displayName?.type === 'required' && (
                      <span>{errors?.displayName?.message}</span>
                    )}
                    {/* {errors?.displayName?.type === 'maxLength' && (
                    <span>{errors?.displayName?.message}</span>
                  )} */}
                  </p>
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-primary"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Invalid Email',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.email?.type === 'required' && (
                      <span>{errors?.email?.message}</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span>{errors?.email?.message}</span>
                    )}
                  </p>
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered input-primary"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be at least six letters',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.password?.type === 'required' && (
                      <span>{errors?.password?.message}</span>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <span>{errors?.password?.message}</span>
                    )}
                  </p>
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered input-primary"
                    {...register('confirmPassword', {
                      required: {
                        value: true,
                        message: 'You need to confirm your password',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be at least six letters',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.confirmPassword?.type === 'required' && (
                      <span>{errors?.confirmPassword?.message}</span>
                    )}
                    {errors.confirmPassword?.type === 'minLength' && (
                      <span>{errors?.confirmPassword?.message}</span>
                    )}
                  </p>
                </div>

                <div className="form-control mt-6">
                  {errorMessage}
                  <input
                    type="submit"
                    className="btn btn-primary text-white uppercase"
                    value="Registration"
                  />{' '}
                  <p className="text-center font-bold">
                    Already have an account?
                    <Link href={`/sign-in`}>
                      <span className="text-primary cursor-pointer">
                        {' '}
                        sign in now!
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
