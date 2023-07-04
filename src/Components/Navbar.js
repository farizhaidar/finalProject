import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 py-6 text-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className='text-3xl'>
            <a href="/" className="text-white font-bold">TIK</a>
            <a href="/" className="text-sky-700 font-bold"> REX</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-sky-700 transition-colors duration-300">Home</a></li>
              <li><a href="/TikTalks" className="text-white hover:text-sky-700 transition-colors duration-300">TikTalks</a></li>
              <li><a href="/About" className="text-white hover:text-sky-700 transition-colors duration-300">About</a></li>
              <li><a href="/Members" className="text-white hover:text-sky-700 transition-colors duration-300">Members</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
