// frontend/src/components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  // Animation variants for Framer Motion
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.2,
      y: -5, // Lift icon slightly on hover
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      // Updated background colors to explicitly match the Navbar's new colors
      className="bg-gray-900 dark:bg-gray-100 p-6 text-gray-400 dark:text-gray-700 text-center text-sm transition-colors duration-500 relative z-20"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Top section: Copyright and Built With */}
        <div className="mb-4">
          <motion.p
            className="flex items-center justify-center space-x-2 mb-2 text-base md:text-lg text-gray-200 dark:text-gray-800" // Adjusted text for new backgrounds
            variants={footerVariants}
          >
            <FaCode className="text-xl text-blue-400 dark:text-blue-500" />{" "}
            <span>&copy; {currentYear} Your Name. All rights reserved.</span>
          </motion.p>
          <motion.p
            className="text-xs md:text-sm text-gray-300 dark:text-gray-600 px-4" // Adjusted text for new backgrounds
            variants={footerVariants}
          >
            Crafted with passion using <span className="font-semibold text-blue-300 dark:text-blue-600">React</span>, <span className="font-semibold text-green-400 dark:text-green-700">Node.js</span>, <span className="font-semibold text-yellow-300 dark:text-yellow-700">Express</span>, <span className="font-semibold text-green-500 dark:text-green-800">MongoDB</span> & <span className="font-semibold text-cyan-400 dark:text-cyan-700">Tailwind CSS</span>.
          </motion.p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 pt-4 border-t border-gray-700 dark:border-gray-300 flex justify-center space-x-6 md:space-x-8 text-3xl"> {/* Adjusted border for new backgrounds */}
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="GitHub profile"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn profile"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="Twitter profile"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;