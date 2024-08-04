// src/components/MainContent.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="flex-grow p-6">
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
