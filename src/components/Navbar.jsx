import React from 'react';
import { navLinks } from '../data/data';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <nav className="border border-red-700 fixed top-0 z-20 px-auto w-full transition-all duration-300 bg-transparent">
        <div className="border border-green-700 flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" />
          </a>

          {/* desktop navigation links */}
          <div className="hidden border border-yellow-700 md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="booking-process"
            className="hidden md:block bg-orange-500 px-6 py-3 text-white rounded-full hover:bg-orange-600 transition"
          >
            Book a table
          </a>

          <button className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square">
            <MenuIcon />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
