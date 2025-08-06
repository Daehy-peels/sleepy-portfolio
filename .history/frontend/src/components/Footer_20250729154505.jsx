// frontend/src/components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa"; // Import more icons

const Footer = ({ theme }) => {
  // Accept theme prop for potential future styling
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-800 p-6 text-gray-400 dark:text-gray-400 text-center text-sm mt-8">
      <div className="container mx-auto">
        <p className="mb-3 flex items-center justify-center space-x-2">
          <FaCode className="text-lg text-blue-400 dark:text-blue-300" />
          <span>&copy; {currentYear} Your Name. All rights reserved.</span>
        </p>
        <div className="mt-2 space-x-6 text-2xl flex justify-center">
          {" "}
          {/* Larger icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          {/* Example for Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            aria-label="Twitter profile"
          >
            <FaTwitter />
          </a>
          {/* Add more social links/icons as needed */}
        </div>
        <p className="mt-4 text-xs">
          Built with React, Node.js, Express, MongoDB & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
