// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="flex flex-col h-full p-4 bg-white shadow-md">
      <Link to="/" className="py-2 text-black hover:bg-gray-200 rounded">
        Overview
      </Link>
      <Link to="/analytics" className="py-2 text-black hover:bg-gray-200 rounded">
        Analytics
      </Link>
      <Link to="/reports" className="py-2 text-black hover:bg-gray-200 rounded">
        Reports
      </Link>
    </nav>
  );
};

export default Sidebar;
