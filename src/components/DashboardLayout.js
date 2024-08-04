// src/components/DashboardLayout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-60 bg-white text-black">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Header />
        <main className="flex-grow p-6 bg-gray-100 text-black">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
