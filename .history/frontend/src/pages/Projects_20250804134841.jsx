import React from "react";

const Projects = () => {
  return <div><motion.div
            className="flex flex-col items-center group cursor-pointer"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className={`p-4 rounded-full transition-shadow duration-300 ${glowColors.express}`}
            >
              <SiExpress
                size={80}
                // Corrected class for black/white contrast
                className="text-gray-900 dark:text-white"
              />
            </motion.div>
            <span
              // Corrected class for black/white contrast
              className="mt-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors"
            >
              Express
            </span>
          </motion.div></div>;
};

export default Projects;
