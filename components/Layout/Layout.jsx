import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
