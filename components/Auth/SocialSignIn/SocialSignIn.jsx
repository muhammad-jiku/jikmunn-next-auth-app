'use client';

import React from 'react';

// internal imports
import { useRouter } from 'next/navigation';
import googleLogo from '../../../assets/images/google.png';
import githubLogo from '../../../assets/images/github.png';

// external import
import { signIn } from 'next-auth/react';

const SocialSignIn = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    console.log('google sign in');
    await signIn('google', {
      callbackUrl: 'http://localhost:3000/',
    });
  };
  const handleGithubLogin = async () => {
    console.log('github sign in');
    await signIn('github', {
      callbackUrl: 'http://localhost:3000/',
    });
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGoogleLogin}
      >
        Continue with{' '}
        <img
          src={googleLogo.src}
          //   src={`${googleLogo}`}
          alt="google"
          //   width={100}
          //   height={100}
          className="ml-2"
        />{' '}
      </button>{' '}
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGithubLogin}
      >
        Continue with{' '}
        <img
          src={githubLogo.src}
          //   src={`${githubLogo}`}
          alt="github"
          //   width={100}
          //   height={100}
          className="ml-2"
        />{' '}
      </button>
    </div>
  );
};

export default SocialSignIn;
