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
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                group // Essential for applying hover effects to children
                text-lg py-2 px-4 rounded-full relative inline-flex items-center justify-center // Added inline-flex for proper centering
                transition-all duration-350 ease-in-out // Overall transition for the button

                // Text Color for inactive state
                ${
                  location.pathname !== link.path
                    ? "text-gray-300 dark:text-neutral-700"
                    : ""
                }

                // Active Link Styling
                ${
                  location.pathname === link.path
                    ? "text-white dark:text-neutral-900 font-bold bg-gray-700 dark:bg-neutral-300 shadow-md"
                    : ""
                }

                // Hover Text Color (for inactive links)
                ${
                  location.pathname !== link.path
                    ? "group-hover:text-white dark:group-hover:text-neutral-900 group-hover:shadow-md" // Text color changes on hover, add shadow
                    : ""
                }

                // Background fill pseudo-element
                before:absolute before:inset-0
                before:rounded-full
                before:bg-blue-500 dark:before:bg-blue-400 // Fill color
                before:z-[-1] // Send behind text
                before:transform before:scale-y-0 before:origin-bottom // Starts from bottom, scaled to 0
                before:transition-transform before:duration-350 before:ease-out // Transition for the fill effect

                // Hover effect for the fill (for inactive links)
                ${
                  location.pathname !== link.path
                    ? "group-hover:before:scale-y-100" // Scales up on hover
                    : ""
                }
              `}
            >
              <span className="relative z-[1]">{link.name}</span>{" "}
              {/* Ensure text is above the pseudo-element */}
            </Link>
          ))}
          {/* Social Icons Desktop */}
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 dark:text-neutral-700 dark:hover:text-blue-500 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
          {/* Theme Toggle Button */}
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
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-white dark:text-neutral-700 dark:hover:text-neutral-900 transition-colors duration-300 text-2xl focus:outline-none
                        transition-transform duration-300 ease-in-out hover:rotate-180"
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
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
              className={`group
                          block px-4 py-2 text-lg rounded-full // Changed to rounded-full for consistent button look
                          transition-all duration-350 ease-in-out // Overall transition for the button
                          overflow-hidden // Crucial for containing the `before` pseudo-element

                          // Text Color for inactive state
                          ${
                            location.pathname !== link.path
                              ? "text-gray-200 dark:text-neutral-800"
                              : ""
                          }
                          
                          // Active Link Styling
                          ${
                            location.pathname === link.path
                              ? "text-white dark:text-neutral-900 font-bold bg-gray-600 dark:bg-neutral-400 shadow-md"
                              : ""
                          }

                          // Hover Text Color (for inactive links)
                          ${
                            location.pathname !== link.path
                              ? "group-hover:text-white dark:group-hover:text-neutral-900 group-hover:shadow-md"
                              : ""
                          }

                          // Background fill pseudo-element
                          before:absolute before:inset-0
                          before:rounded-full
                          before:bg-blue-500 dark:before:bg-blue-400
                          before:z-[-1]
                          before:transform before:scale-y-0 before:origin-bottom
                          before:transition-transform before:duration-350 before:ease-out

                          // Hover effect for the fill (for inactive links)
                          ${
                            location.pathname !== link.path
                              ? "group-hover:before:scale-y-100"
                              : ""
                          }
              `}
            >
              <span className="relative z-[1]">{link.name}</span>
            </Link>
          ))}
          {/* Social icons in mobile menu */}
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