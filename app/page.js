import Image from 'next/image';
import { Inter } from '@next/font/google';
import HomePage from '@/components/Home/Home';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HomePage />
      <ToastContainer />
    </>
  );
}
