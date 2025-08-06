// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
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
    <nav className="bg-gray-800 dark:bg-neutral-100 p-4 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link
          to="/"
          className="text-white dark:text-gray-900 text-2xl font-bold hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
        >
          YourName.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                text-lg font-medium px-3 py-2 rounded-md
                transition-colors duration-200
                ${
                  location.pathname === link.path
                    ? "text-blue-400 dark:text-blue-600 font-semibold bg-gray-700 dark:bg-neutral-200" // Active link
                    : "text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 hover:bg-gray-700 dark:hover:bg-neutral-200" // Inactive link
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons (Desktop) */}
          <div className="flex space-x-4 text-xl ml-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 dark:text-gray-700 text-2xl ml-4
                       hover:text-white dark:hover:text-gray-900
                       focus:outline-none transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 dark:text-gray-700 text-2xl
                       hover:text-white dark:hover:text-gray-900
                       focus:outline-none transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white dark:text-gray-900 text-2xl focus:outline-none"
            aria-label="Open mobile menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-neutral-200 mt-4 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className={`
                block px-4 py-2 text-lg font-medium
                transition-colors duration-200
                ${
                  location.pathname === link.path
                    ? "text-blue-400 dark:text-blue-600 font-semibold bg-gray-600 dark:bg-neutral-300" // Active link
                    : "text-gray-200 dark:text-gray-800 hover:text-white dark:hover:text-gray-900 hover:bg-gray-600 dark:hover:bg-neutral-300" // Inactive link
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex justify-center space-x-6 py-3 border-t border-gray-600 dark:border-neutral-400 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200 text-2xl"
              aria-label="Twitter"
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
