// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-blue-500">
            Data Viz Dashboard
          </Link>
        </h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/analytics"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            Analytics
          </Link>
          <Link
            to="/reports"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            Reports
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
