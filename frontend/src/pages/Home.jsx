// frontend/src/pages/Home.jsx
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 10, -10, 0],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.9 },
  };

  const glowColors = {
    mongodb:
      "shadow-[0_0_15px_rgba(50,200,100,0.8)] dark:shadow-[0_0_20px_rgba(50,200,100,0.8)]",
    express:
      "shadow-[0_0_15px_rgba(0,0,0,0.8)] dark:shadow-[0_0_20px_rgba(80,80,80,0.8)]",
    react:
      "shadow-[0_0_15px_rgba(97,218,251,0.8)] dark:shadow-[0_0_20px_rgba(97,218,251,0.8)]",
    nodejs:
      "shadow-[0_0_15px_rgba(100,150,100,0.8)] dark:shadow-[0_0_20px_rgba(100,150,100,0.8)]",
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center text-white animated-gradient-bg"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-4xl md:text-6xl font-montserrat font-bold tracking-tight mb-4 drop-shadow-md"
      >
        Hello, I'm{" "}
        <span className="text-blue-500 dark:text-blue-400">Sleepyhead</span>
      </motion.h1>

      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="text-lg md:text-xl font-raleway font-medium max-w-2xl mb-8 drop-shadow-sm"
      >
        I'm a passionate MERN stack developer dedicated to building beautiful,
        user-friendly, and functional web applications.
      </motion.p>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
        {/* MongoDB Icon */}
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.mongodb}`}
          >
            <DiMongodb
              size={80}
              className="text-green-600 dark:text-green-500"
            />
          </motion.div>
          <span className="mt-4 text-xl font-semibold text-white group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
            MongoDB
          </span>
        </motion.div>

        {/* Express.js Icon */}
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.express}`}
          >
            <SiExpress size={80} className="text-gray-800 dark:text-gray-200" />
          </motion.div>
          <span className="mt-4 text-xl font-semibold text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            Express
          </span>
        </motion.div>

        {/* React Icon */}
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.react}`}
          >
            <FaReact size={80} className="text-blue-500 dark:text-blue-400" />
          </motion.div>
          <span className="mt-4 text-xl font-semibold text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            React
          </span>
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          className="flex flex-col items-center group cursor-pointer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.nodejs}`}
          >
            <FaNodeJs
              size={80}
              className="text-green-700 dark:text-green-500"
            />
          </motion.div>
          <span className="mt-4 text-xl font-semibold text-white group-hover:text-green-700 dark:group-hover:text-green-500 transition-colors">
            Node.js
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
