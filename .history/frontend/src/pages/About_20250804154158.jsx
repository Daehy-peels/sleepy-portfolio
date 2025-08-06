// frontend/src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 md:pt-16 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 tracking-tight"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-12 md:mt-24">
        {/* Profile Image with Motion and Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform rotate-45 animate-spin-slow" />
          <div className="absolute inset-0 rounded-full p-1 bg-white dark:bg-gray-900" />
          <div className="absolute inset-1 rounded-full overflow-hidden">
            {/* Replace this with your own image */}
            <img
              src="/" // Placeholder image
              alt="Your Name"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Content with Motion and Styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-left md:text-lg text-gray-700 dark:text-gray-300 md:w-2/3"
        >
          <p className="mb-4">
            Hello! I'm [Your Name], a dedicated MERN Stack Developer with a
            passion for creating beautiful and functional web applications. I
            specialize in crafting engaging user interfaces with React,
            developing powerful server-side logic with Node.js and Express, and
            managing data with MongoDB.
          </p>
          <p className="mb-4">
            I am always eager to learn new technologies and improve my craft,
            focusing on clean code, efficient solutions, and user-centric
            design.
          </p>
          <p>
            When I'm not coding, you can find me [mention a hobby, e.g.,
            exploring new tech blogs, hiking, playing chess]. I'm excited to
            leverage my skills to build impactful and innovative projects. Let's
            connect!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
