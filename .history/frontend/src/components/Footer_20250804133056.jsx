// frontend/src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 text-center bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {year} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
