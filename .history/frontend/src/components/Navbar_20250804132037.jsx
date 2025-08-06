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

  // ... (mobile menu variants from previous code, they are still valid)
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
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
          <a
            href="#home" // Changed to anchor link
            className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-tight select-none group no-underline hover:no-underline focus:no-underline active:no-underline"
          >
            YourName.dev
            <span className="inline-block w-3 h-3 ml-1 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          <ul className="flex gap-2 lg:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  whileHover={{
                    y: -2,
                    textShadow: "0 2px 8px rgba(59, 130, 246, 0.6)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a
                    href={link.href} // Changed to anchor link
                    className={`uppercase tracking-widest text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 no-underline hover:no-underline focus:no-underline active:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`}
                  >
                    {link.name}
                  </a>
                </motion.div>
                {/* Note: The active link indicator logic will need to be changed to check the scroll position instead of location.pathname. */}
              </li>
            ))}
          </ul>
          {/* ... (rest of the social icons and theme toggle code) */}
        </nav>
        {/* ... (mobile menu and other components) */}
      </div>

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
            {/* ... (Close button) */}
            <nav>
              <motion.ul className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={menuItemVariants}>
                    <a
                      href={link.href} // Changed to anchor link
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 no-underline hover:no-underline focus:no-underline active:no-underline`}
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
            {/* ... (rest of mobile menu) */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
