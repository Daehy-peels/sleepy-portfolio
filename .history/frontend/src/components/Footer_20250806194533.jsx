// frontend/src/components/Footer.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCopyrightClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount + 1 >= 5) {
      setShowEasterEgg(true);
    }
  };

  return (
    <footer className="w-full py-8 text-center bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Social Media Links (Left-aligned on desktop) */}
        <div className="flex justify-center md:justify-start gap-6">
          <motion.a
            href="https://github.com/Daehy-peels"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/myat-bhone-kyaw-291b5a306/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Copyright and Easter Egg (Right-aligned on desktop) */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-raleway">
            <span
              onClick={handleCopyrightClick}
              className="cursor-pointer"
              title="Click me 5 times!"
            >
              &copy;
            </span>{" "}
            {year} Your Name. All rights reserved.
          </p>

          {/* The Easter Egg Message */}
          {showEasterEgg && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-xs text-gray-500 dark:text-gray-500 font-raleway italic"
            >
              "The best way to get a project done faster is to start sooner."
            </motion.p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
