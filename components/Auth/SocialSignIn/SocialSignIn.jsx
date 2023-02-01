'use client';

import React from 'react';
import googleLogo from '../../../assets/images/google.png';
import githubLogo from '../../../assets/images/github.png';

const SocialSignIn = () => {
  const handleGoogleLogin = async () => {
    console.log('google sign in');
  };
  const handleGithubLogin = async () => {
    console.log('github sign in');
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGoogleLogin}
      >
        Continue with <img src={googleLogo} alt="" className="ml-2" />{' '}
      </button>{' '}
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGithubLogin}
      >
        Continue with <img src={githubLogo} alt="" className="ml-2" />{' '}
      </button>
    </div>
  );
};

export default SocialSignIn;
