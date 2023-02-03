'use client';

import Image from 'next/image';
import React from 'react';
import loadingImg from '../../../assets/gifs/loading.gif';

const Spinner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image src={loadingImg.src} alt="loading" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
