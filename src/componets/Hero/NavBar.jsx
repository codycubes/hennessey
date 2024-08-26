import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">

            <a href="/" className="text-white text-2xl font-bold">HENNESSEY</a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/about" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/services" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Products</a>
                <a href="/contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/services" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/contact" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
