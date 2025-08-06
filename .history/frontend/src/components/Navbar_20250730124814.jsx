// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaTwitter } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 dark:bg-neutral-200 p-4 shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-white text-2xl font-bold
                     hover:text-blue-400 dark:hover:text-blue-300
                     transition-colors duration-300 transform hover:scale-105"
        >
          YourName.dev
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              // --- UPDATED CLASSES FOR PRETTIER BUTTONS & FIXED UNDERLINE ---
              className={`
                text-lg py-2 px-4 rounded-md relative // Added padding and rounded corners
                transition-colors duration-300 // For text color transition
                
                // Text Color based on Active/Inactive State
                ${location.pathname === link.path // If current path matches link's path
                  ? 'text-white dark:text-neutral-900 font-bold' // Active link: bolder, specific colors for better visibility
                  : 'text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-900' // Inactive link: base colors with hover
                }

                // Underline (pseudo-element) Styling
                after:absolute after:bottom-0 after:left-0 after:h-[3px] // Made underline slightly thicker for active state
                after:bg-blue-400 dark:after:bg-blue-500 // Underline color
                after:transition-transform after:duration-300 after:ease-out // Transition for scale
                after:origin-left // Ensures scale from left

                // Underline Visibility based on Active/Hover State (fixed!)
                ${location.pathname === link.path
                  ? 'after:scale-x-100' // Active: always full width
                  : 'after:scale-x-0 hover:after:scale-x-100' // Inactive: hidden, scales on hover
                }
                
                // Button Hover Effects (Background & Shadow)
                hover:bg-gray-700 dark:hover:bg-neutral-300 hover:shadow-md // Subtle background change & shadow on hover
              `}
            >
              {link.name}
            </Link>
          ))}
          {/* Social Icons Desktop */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
          {/* Theme Toggle Button - WITH SPIN EFFECT */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-900 transition-colors duration-300 text-2xl focus:outline-none
                       transition-transform duration-300 ease-in-out hover:rotate-180"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>

        {/* Mobile menu button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button (Mobile) - WITH SPIN EFFECT */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-900 transition-colors duration-300 text-2xl focus:outline-none
                       transition-transform duration-300 ease-in-out hover:rotate-180"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-neutral-200 mt-2 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              // --- UPDATED CLASSES FOR MOBILE BUTTONS & FIXED UNDERLINE ---
              className={`block px-4 py-2 text-lg rounded-md // Added padding and rounded corners
                         transition-colors duration-300 // For text color transition
                         
                         ${location.pathname === link.path // If current path matches link's path
                           ? 'text-white dark:text-neutral-900 font-bold bg-gray-600 dark:bg-neutral-300' // Active link: background color to make it stand out
                           : 'text-gray-200 dark:text-neutral-800 hover:bg-gray-600 dark:hover:bg-neutral-400' // Inactive link: base colors with hover background
                         }

                         relative
                         after:absolute after:bottom-0 after:left-0 after:h-[3px]
                         after:bg-blue-400 dark:after:bg-blue-500
                         after:transition-transform after:duration-300 after:ease-out
                         after:origin-left

                         ${location.pathname === link.path
                           ? 'after:scale-x-100' // Active: always full width
                           : 'after:scale-x-0 hover:after:scale-x-100' // Inactive: hidden, scales on hover
                         }
              `}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center space-x-6 py-2 border-t border-gray-600 dark:border-neutral-400 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;