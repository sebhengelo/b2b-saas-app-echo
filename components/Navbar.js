import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">B2B SaaS Application</div>
        <div>
          <a href="/" className="px-4">Home</a>
          <a href="/insights" className="px-4">Insights</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
