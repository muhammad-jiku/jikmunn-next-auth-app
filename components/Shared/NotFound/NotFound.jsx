'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NotFoundImg from '../../../assets/gifs/NotFound.gif';

const NotFound = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image
              src={NotFoundImg.src}
              alt="not found"
              width={100}
              height={100}
            />
            <h1 className="text-3xl font-bold py-4">Page is not found!</h1>
            <button className="btn btn-primary text-white font-bold cursor-pointer">
              <Link href={`/`} className="">
                Go to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
