// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    // Corrected comments
    {/* Adjusted Navbar background */}
    {/* Added transition-colors for smooth change */}
    <nav className="bg-gray-800 dark:bg-neutral-200 p-4 shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name - Use Link for internal navigation */}
        <Link
          to="/"
          className="text-white text-2xl font-bold
                     hover:text-blue-400 dark:hover:text-blue-300
                     transition-colors duration-300 transform hover:scale-105"
        >
          YourName.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300
                         transition-all duration-300 text-lg relative
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 dark:after:bg-blue-300 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons - Desktop */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          {/* Light/Dark Mode Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none
                       bg-gray-700 dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600
                       text-yellow-400 dark:text-gray-300 text-xl transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Light/Dark Mode Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none
                       bg-gray-700 dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600
                       text-yellow-400 dark:text-gray-300 text-xl transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
            aria-label="Open menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-gray-700 mt-2 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-200 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center space-x-6 py-2 border-t border-gray-600 dark:border-gray-600 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;