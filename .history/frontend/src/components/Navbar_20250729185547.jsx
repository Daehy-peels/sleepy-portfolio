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
          
          className="text-white text-2xl font-bold hover:text-blue-400 dark:text-neutral-900 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-105"
        >
          YourName.dev
        </Link>

        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              
              className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-all duration-300 text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 dark:after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            
            className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            
            className="text-gray-300 dark:text-neutral-800 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          
          <button
            onClick={toggleTheme}
            
            className="p-2 rounded-full focus:outline-none bg-gray-700 dark:bg-neutral-300 hover:bg-gray-600 dark:hover:bg-neutral-400 text-yellow-400 dark:text-neutral-700 text-xl transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>

       
        <div className="md:hidden flex items-center space-x-4">
        
          <button
            onClick={toggleTheme}
           
            className="p-2 rounded-full focus:outline-none bg-gray-700 dark:bg-neutral-300 hover:bg-gray-600 dark:hover:bg-neutral-400 text-yellow-400 dark:text-neutral-700 text-xl transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            
            className="text-white dark:text-neutral-900 focus:outline-none text-2xl"
            aria-label="Open menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        
        <div className="md:hidden bg-gray-700 dark:bg-neutral-300 mt-2 rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
