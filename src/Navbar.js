import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <a href="/" className="text-white text-xl font-bold">TIK</a>
            <a href="/" className="text-sky-700 text-xl font-bold"> REX</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/" className="text-white">About</a></li>
              <li><a href="/" className="text-white">Services</a></li>
              <li><a href="/" className="text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
