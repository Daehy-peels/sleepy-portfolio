// frontend/src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Assuming these exist
import { BiSun, BiMoon } from "react-icons/bi"; // Sun/Moon icons for theme toggle

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="bg-gray-900 dark:bg-gray-100 p-4 shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-400 dark:text-blue-600 flex items-center space-x-2"
        >
          <span className="text-2xl">✨</span>{" "}
          {/* Or your actual logo/dev icon */}
          <span>YourName.dev</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300 relative group
              ${
                isActive ? "font-semibold text-blue-400 dark:text-blue-600" : ""
              }`
            }
          >
            Home
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 dark:bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300 relative group
              ${
                isActive ? "font-semibold text-blue-400 dark:text-blue-600" : ""
              }`
            }
          >
            About
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 dark:bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300 relative group
              ${
                isActive ? "font-semibold text-blue-400 dark:text-blue-600" : ""
              }`
            }
          >
            Projects
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 dark:bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300 relative group
              ${
                isActive ? "font-semibold text-blue-400 dark:text-blue-600" : ""
              }`
            }
          >
            Skills
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 dark:bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-200 dark:text-gray-800 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300 relative group
              ${
                isActive ? "font-semibold text-blue-400 dark:text-blue-600" : ""
              }`
            }
          >
            Contact
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 dark:bg-blue-600 transform -translate-x-1/2 transition-all duration-300 ${
                isActive ? "w-full" : "group-hover:w-full"
              }`}
            ></span>
          </NavLink>
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="flex items-center space-x-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
            aria-label="Twitter profile"
          >
            <FaTwitter />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600
                       text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
