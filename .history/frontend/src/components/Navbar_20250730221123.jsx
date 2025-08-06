// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // <-- Import motion and AnimatePresence
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  // Variants for staggered mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.08, // Stagger animation for each child link
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
    // Main header motion component for initial load animation and backdrop blur
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-blue-100 dark:border-blue-900/40 shadow-sm transition-colors duration-300"
      style={{ WebkitBackdropFilter: "blur(16px)" }} // For Safari compatibility
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Name with Framer Motion */}
        <motion.div
          whileHover={{ scale: 1.08 }} // Scale up on hover
          whileTap={{ scale: 0.97 }} // Slight squash on tap/click
        >
          <Link
            to="/"
            className="text-gray-900 dark:text-white text-2xl font-extrabold tracking-tight select-none group no-underline hover:no-underline focus:no-underline active:no-underline"
          >
            YourName.dev
            {/* Animated dot like the example */}
            <span className="inline-block w-3 h-3 ml-1 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          <ul className="flex gap-2 lg:gap-6">
            <AnimatePresence>
              {" "}
              {/* For layoutId animations */}
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{
                      y: -2,
                      textShadow: "0 2px 8px rgba(59, 130, 246, 0.6)",
                    }} // Lift and text shadow on hover
                    whileTap={{ scale: 0.97 }} // Slight squash on tap
                  >
                    <Link
                      to={link.path}
                      className={`uppercase tracking-widest text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 no-underline hover:no-underline focus:no-underline active:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                        location.pathname === link.path
                          ? "text-blue-600 dark:text-blue-400" // Active link color
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" // Inactive link color and hover
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                  {/* Animated growing bar indicator for active link */}
                  {location.pathname === link.path && (
                    <motion.div
                      key="activeNavBar" // Unique key for AnimatePresence to track
                      layoutId="activeNavBar" // Shared layoutId for smooth transition between active links
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 origin-center rounded-full"
                      style={{ transformOrigin: "center" }} // Ensures animation originates from center
                    />
                  )}
                </li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Social Icons Desktop */}
          <div className="flex space-x-4 text-2xl ml-4">
            {" "}
            {/* Added ml-4 for spacing */}
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.15 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Slight squash on tap
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </motion.a>
          </div>

          {/* Theme toggle for desktop - uses AnimatePresence for icon transitions */}
          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-blue-300 dark:border-blue-700 bg-white/60 dark:bg-gray-900/60 shadow-md backdrop-blur-lg transition-colors duration-300"
            whileHover={{ scale: 1.15, rotate: 180 }} // Scale up and rotate on hover
            whileTap={{ scale: 0.93 }} // Slight squash on tap
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? ( // Check 'theme' prop here
                <motion.div
                  key="sun-icon" // Unique key for AnimatePresence
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <MdDarkMode className="w-6 h-6 text-blue-600 dark:text-blue-400" />{" "}
                  {/* Use MdDarkMode for dark theme */}
                </motion.div>
              ) : (
                <motion.div
                  key="moon-icon" // Unique key for AnimatePresence
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <MdLightMode className="w-6 h-6 text-yellow-500" />{" "}
                  {/* Use MdLightMode for light theme */}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button for mobile - Uses same Framer Motion as desktop */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-blue-300 dark:border-blue-700 bg-white/60 dark:bg-gray-900/60 shadow-md backdrop-blur-lg transition-colors duration-300"
            whileHover={{ scale: 1.15, rotate: 180 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun-icon-mobile"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <MdDarkMode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-icon-mobile"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <MdLightMode className="w-6 h-6 text-yellow-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Hamburger Icon with Framer Motion cross-fade animation */}
          <motion.button
            className="relative p-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white/60 dark:bg-gray-900/60 shadow-sm backdrop-blur-lg transition-colors duration-300 flex items-center justify-center overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="bars-icon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute"
                >
                  <FaBars className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="times-icon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute"
                >
                  <FaTimes className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            variants={menuVariants} // Use the defined variants
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-200/80 dark:from-blue-950/90 dark:via-gray-900/95 dark:to-blue-900/80 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            {/* Close button for mobile menu */}
            <motion.button
              className="absolute top-6 right-6 p-3 rounded-full border border-blue-200 dark:border-blue-800 bg-white/60 dark:bg-gray-900/60 shadow-md"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-7 h-7 text-blue-600 dark:text-blue-400" />{" "}
              {/* Using X from lucide-react if you switch, otherwise FaTimes from react-icons/fa */}
            </motion.button>

            <nav>
              <motion.ul className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={menuItemVariants} // Use defined variants for individual items
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)} // Close menu on link click
                      className={`text-2xl font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 no-underline hover:no-underline focus:no-underline active:no-underline`}
                      // Framer motion hover/tap for mobile links
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0 2px 8px rgba(59, 130, 246, 0.6)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.name}
                    </Link>
                    {/* Active indicator for mobile links (optional, can remove if it clutters mobile) */}
                    {location.pathname === link.path && (
                      <motion.div
                        key="activeNavBarMobile"
                        layoutId="activeNavBarMobile"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="mx-auto mt-2 w-8 h-0.5 bg-blue-600 dark:bg-blue-400 origin-center rounded-full"
                        style={{ transformOrigin: "center" }}
                      />
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Theme toggle for mobile menu - uses same Framer Motion as desktop */}
            <motion.button
              onClick={toggleTheme}
              className="mt-12 p-3 rounded-full border border-blue-300 dark:border-blue-700 bg-white/60 dark:bg-gray-900/60 shadow-md"
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun-icon-mobile-menu"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <MdDarkMode className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-icon-mobile-menu"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <MdLightMode className="w-7 h-7 text-yellow-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
