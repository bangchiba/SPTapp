import React from 'react';
import Nav from './Nav';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="font-sans text-white">
      <Nav />
        <div className="container sm:mx-auto px-4 pt-16">{children}</div>
    </div>
  );
};

export default MainLayout;
