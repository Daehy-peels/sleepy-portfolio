// frontend/src/pages/Skills.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMongodb, SiExpress } from "react-icons/si";

// You can add more icons from react-icons here
// For example:
// import { DiPython, DiJava } from 'react-icons/di';
// import { SiTypescript, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  // === Skills Data Array ===
  // This is where you can add or remove your skills.
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { name: "Sass", icon: <FaSass className="text-pink-500" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center p-8 pt-24 md:pt-16 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-montserrat font-bold text-black dark:text-white mb-12 tracking-tight"
      >
        My Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-5xl space-y-10"
      >
        {skillsData.map((category) => (
          <motion.div key={category.category} className="text-left">
            <h3 className="text-xl md:text-2xl font-montserrat font-bold text-blue-600 dark:text-blue-400 mb-6">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <span className="font-raleway text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
