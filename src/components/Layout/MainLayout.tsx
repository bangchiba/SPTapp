import React from 'react';
import Nav from './Nav';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-sans">
      <Nav />
        <div className="container mx-auto max-w-screen-lg shadow-xl px-4 py-16 mt-10">{children}</div>
    </div>
  );
};

export default MainLayout;
