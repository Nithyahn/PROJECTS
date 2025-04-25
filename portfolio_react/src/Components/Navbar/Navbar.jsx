import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
      {/* Portfolio Title */}
      <span className='text-xl font-bold tracking-wide hover:text-purple-400 transition-all duration-300'>
        Portfolio
      </span>

      {/* Navigation Links */}
      <ul className={`${menuOpen ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
          <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-purple-400'>
            About
          </li>
        </a>
        <a href="#Projects">
          <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-purple-400'>
            Projects
          </li>
        </a>
        <a href="#Experience">
          <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-purple-400'>
            Experience
          </li>
        </a>
        <a href="#Footer">
          <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-purple-400'>
            Contact
          </li>
        </a>
      </ul>

      {/* Menu Icons */}
      {menuOpen ? (
        <RiCloseLine
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={toggleMenu}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
