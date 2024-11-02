import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-secondary text-white w-64 min-h-screen p-4">
      <div className="text-lg font-bold mb-4">Menu</div>
      <ul>
        <li className="mb-2">
          <a href="/" className="block px-4 py-2 rounded hover:bg-primary">Home</a>
        </li>
        <li>
          <a href="/insights" className="block px-4 py-2 rounded hover:bg-primary">Insights</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
