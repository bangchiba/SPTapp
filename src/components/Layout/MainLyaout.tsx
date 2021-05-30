import React from 'react';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex justify-center h-screen bg-white px-6">
      {children}
    </div>
  );
};

export default MainLayout;
