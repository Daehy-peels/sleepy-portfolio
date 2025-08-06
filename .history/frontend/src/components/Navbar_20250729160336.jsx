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
    // Changed dark:bg-gray-800 to dark:bg-neutral-200 for light mode Navbar background
    // Added transition-colors duration-500 for smooth theme changes
    <nav className="bg-gray-800 dark:bg-neutral-200 p-4 shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          // Adjusted dark:text-gray-900 for better contrast in light mode
          className="text-white text-2xl font-bold
                     hover:text-blue-400 dark:text-neutral-900 dark:hover:text-blue-500
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
              // Adjusted dark:text-gray-800 and dark:hover:text-blue-500
              className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500
                         transition-all duration-300 text-lg relative
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 dark:after:bg-blue-500 after:transition-all after:duration-300
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
            // Adjusted dark:text-gray-800 and dark:hover:text-blue-500
            className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            // Adjusted dark:text-gray-800 and dark:hover:text-blue-500
            className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          {/* Light/Dark Mode Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none
                       // Adjusted bg-gray-700 to dark:bg-neutral-300 and text-yellow-400 to dark:text-neutral-700
                       bg-gray-700 dark:bg-neutral-300 hover:bg-gray-600 dark:hover:bg-neutral-400
                       text-yellow-400 dark:text-neutral-700 text-xl transition-colors duration-300"
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
                       // Adjusted bg-gray-700 to dark:bg-neutral-300 and text-yellow-400 to dark:text-neutral-700
                       bg-gray-700 dark:bg-neutral-300 hover:bg-gray-600 dark:hover:bg-neutral-400
                       text-yellow-400 dark:text-neutral-700 text-xl transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            // Adjusted text-white to dark:text-neutral-900
            className="text-white dark:text-neutral-900 focus:outline-none text-2xl"
            aria-label="Open menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isOpen && (
        // Adjusted bg-gray-700 to dark:bg-neutral-300
        <div className="md:hidden bg-gray-700 dark:bg-neutral-300 mt-2 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              // Adjusted text-gray-200 to dark:text-neutral-800 and hover:bg-gray-600 to dark:hover:bg-neutral-400
              className="block px-4 py-2 text-gray-200 dark:text-neutral-800 hover:bg-gray-600 dark:hover:bg-neutral-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center space-x-6 py-2 border-t border-gray-600 dark:border-neutral-400 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              // Adjusted text-gray-200 to dark:text-neutral-800 and hover:text-blue-400 to dark:hover:text-blue-500
              className="text-gray-200 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              // Adjusted text-gray-200 to dark:text-neutral-800 and hover:text-blue-400 to dark:hover:text-blue-500
              className="text-gray-200 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
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