// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
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
    <nav className="bg-gray-800 dark:bg-neutral-900 p-4 shadow-xl sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-white dark:text-gray-100 text-2xl font-extrabold tracking-wide
                     hover:text-blue-400 dark:hover:text-blue-300
                     transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          YourName.dev
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                group // Essential for applying hover effects to children/pseudo-elements
                text-lg py-2 px-4 rounded-full relative inline-flex items-center justify-center
                transition-all duration-350 ease-in-out // Smooth transitions for all properties
                overflow-hidden // Hide anything that overflows, like the 'before' pseudo-element initially
                transform hover:-translate-y-1 hover:shadow-md // Lifts up and adds shadow on hover

                ${
                  location.pathname !== link.path
                    ? "text-gray-300 dark:text-neutral-300" // Inactive text color
                    : ""
                }

                ${
                  location.pathname === link.path
                    ? "text-white dark:text-neutral-900 font-bold bg-blue-500 dark:bg-blue-400 shadow-md" // Active link color & background
                    : ""
                }

                // Pseudo-element for background fill effect on hover/active
                before:absolute before:inset-0
                before:rounded-full
                before:bg-blue-500 dark:before:bg-blue-400
                before:z-[-1] // Puts the background behind the text
                before:transform before:scale-0 before:origin-right // Starts invisible, scales from right
                before:transition-transform before:duration-350 before:ease-out

                ${
                  location.pathname !== link.path
                    ? "group-hover:before:scale-100 group-hover:before:origin-left" // Expands from left on hover
                    : ""
                }
                 ${
                   location.pathname !== link.path
                     ? "group-hover:text-white dark:group-hover:text-neutral-900" // Text color changes on hover
                     : ""
                 }
              `}
            >
              <span className="relative z-[1]">{link.name}</span>
            </Link>
          ))}
          {/* Social Icons Desktop */}
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-300 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110" // Icons scale up on hover
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-300 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110" // Icons scale up on hover
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-300 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110" // Icons scale up on hover
            >
              <FaTwitter />
            </a>
          </div>
          {/* Theme Toggle Button - KEEPING AS IS */}
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
          {/* Theme Toggle Button - KEEPING AS IS */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-900 transition-colors duration-300 text-2xl focus:outline-none
                        transition-transform duration-300 ease-in-out hover:rotate-180"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white dark:text-gray-100 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-neutral-800 mt-2 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`group
                block px-4 py-3 text-lg font-medium relative
                transition-all duration-350 ease-in-out
                overflow-hidden
                transform hover:-translate-y-0.5 hover:shadow-md // Lift and shadow for mobile links

                ${
                  location.pathname === link.path
                    ? "text-white dark:text-neutral-900 bg-blue-500 dark:bg-blue-400 shadow-md" // Active mobile link
                    : "text-gray-200 dark:text-neutral-300" // Inactive mobile link
                }

                // Pseudo-element for background fill effect in mobile menu
                before:absolute before:inset-0
                before:bg-blue-500 dark:before:bg-blue-400
                before:z-[-1]
                before:transform before:scale-x-0 before:origin-left // Starts invisible, scales horizontally from left
                before:transition-transform before:duration-350 before:ease-out

                ${
                  location.pathname !== link.path
                    ? "group-hover:before:scale-x-100" // Expands background horizontally on hover
                    : ""
                }
                ${
                  location.pathname !== link.path
                    ? "group-hover:text-white dark:group-hover:text-neutral-900" // Text color changes on hover
                    : ""
                }
              `}
            >
              <span className="relative z-[1]">{link.name}</span>
            </Link>
          ))}
          {/* Social icons in mobile menu */}
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-600 dark:border-neutral-700 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-300 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl transform hover:scale-110" // Icons scale up on hover
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-300 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl transform hover:scale-110" // Icons scale up on hover
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-neutral-300 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl transform hover:scale-110" // Icons scale up on hover
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
