// frontend/src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-6 text-gray-400 text-center text-sm mt-8">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Sleepyhead. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          {/* Social media links will go here (e.g., LinkedIn, GitHub) */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
