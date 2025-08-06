// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.25, type: "spring", stiffness: 120 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/50 dark:bg-gray-900/50
                 backdrop-blur-lg backdrop-saturate-150
                 border-b border-blue-100/50 dark:border-blue-900/30
                 shadow-sm transition-colors duration-300"
      style={{ WebkitBackdropFilter: "blur(16px) saturate(150%)" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Your Name */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
          <a
            href="#home"
            className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-tight select-none group no-underline hover:no-underline focus:no-underline active:no-underline"
          >
            YourName.dev
            <span className="inline-block w-3 h-3 ml-1 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <nav>
            <ul className="flex gap-2 lg:gap-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{
                    y: -2,
                    textShadow: "0 2px 8px rgba(59, 130, 246, 0.6)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  <a
                    href={link.href}
                    className="uppercase tracking-widest text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#3B82F6" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-300 text-xl transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#0A66C2" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-300 text-xl transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: "#1DA1F2" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-300 text-xl transition-colors duration-200"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
            </motion.a>
          </div>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 ml-4 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Toggle dark/light mode"
          >
            <motion.span
              key={theme}
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 mr-4 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Toggle dark/light mode"
          >
            <motion.span
              key={theme}
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </motion.span>
          </motion.button>
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Open mobile menu"
          >
            <motion.span
              key={isOpen ? "open" : "closed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-200/80 dark:from-blue-950/90 dark:via-gray-900/95 dark:to-blue-900/80 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Close mobile menu"
            >
              <FaTimes className="text-xl" />
            </motion.button>

            <nav>
              <motion.ul className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={menuItemVariants}>
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-2xl font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 2px 8px rgba(59, 130, 246, 0.6)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center gap-6 mt-12">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
