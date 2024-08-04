// src/components/ResponsiveGrid.js
import React from 'react';

const ResponsiveGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="p-4 bg-white shadow-md">Content</div>
      <div className="p-4 bg-white shadow-md">Content</div>
      <div className="p-4 bg-white shadow-md">Content</div>
    </div>
  );
};

export default ResponsiveGrid;
