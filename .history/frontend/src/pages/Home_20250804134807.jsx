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
      "shadow-[0_0_15px_rgba(150,150,150,0.8)] dark:shadow-[0_0_20px_rgba(255,255,255,0.8)]",
    react:
      "shadow-[0_0_15px_rgba(97,218,251,0.8)] dark:shadow-[0_0_20px_rgba(97,218,251,0.8)]",
    nodejs:
      "shadow-[0_0_15px_rgba(104,160,88,0.8)] dark:shadow-[0_0_20px_rgba(104,160,88,0.8)]",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 md:pt-16 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
        >
          Hi, I'm <span className="block mt-2 md:mt-4">Your Name.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-12"
        >
          A dedicated MERN Stack Developer.
        </motion.p>
      </div>

      <div className="mt-16 w-full max-w-2xl px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight"
        >
          My Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
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
                className="text-green-600 dark:text-green-400"
              />
            </motion.div>
            <span className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              MongoDB
            </span>
          </motion.div>
          {/* Express.js Icon - FIX applied here */}
          {/* Express.js Icon */}         {" "}
          <motion.div
            className="flex flex-col items-center group cursor-pointer"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
                       {" "}
            <motion.div
              className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.express}`}
            >
                           {" "}
              <SiExpress
                size={80} // Corrected class for black/white contrast
                className="text-gray-900 dark:text-white"
              />
                         {" "}
            </motion.div>
                       {" "}
            <span // Corrected class for black/white contrast
              className="mt-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors"
            >
                            Express            {" "}
            </span>
                     {" "}
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
            <span className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
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
            <span className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-500 transition-colors">
              Node.js
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
