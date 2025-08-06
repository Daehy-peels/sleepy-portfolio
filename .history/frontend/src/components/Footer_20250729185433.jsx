// frontend/src/components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-neutral-200 p-6 text-gray-400 dark:text-neutral-700 text-center text-sm mt-8 transition-colors duration-500">
      <div className="container mx-auto">
        <p className="mb-3 flex items-center justify-center space-x-2">
          <FaCode className="text-lg text-blue-400 dark:text-blue-500" />{" "}
          {/* Adjusted dark:text-blue-500 */}
          <span>&copy; {currentYear} Your Name. All rights reserved.</span>
        </p>
        <div className="mt-2 space-x-6 text-2xl flex justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            // Adjusted dark:hover:text-blue-500
            className="hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Twitter profile"
          >
            <FaTwitter />
          </a>
        </div>
        {/* Adjusted dark:text-neutral-600 */}
        <p className="mt-4 text-xs dark:text-neutral-600">
          Built with React, Node.js, Express, MongoDB & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
