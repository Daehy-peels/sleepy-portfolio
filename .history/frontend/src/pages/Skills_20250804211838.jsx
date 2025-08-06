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

const Skills = () => {
  // === Skills Data Array with levels ===
  // This is where you can add, remove, or edit your skills and their proficiency levels (0-100).
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500" />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500" />,
          level: 90,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" />,
          level: 85,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-blue-400" />,
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          level: 90,
        },
        { name: "Sass", icon: <FaSass className="text-pink-500" />, level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          level: 70,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-400" />,
          level: 65,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          level: 60,
        },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600" />,
          level: 85,
        },
        {
          name: "Vite",
          icon: <SiVite className="text-purple-500" />,
          level: 75,
        },
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
          <div key={category.category} className="text-left">
            <h3 className="text-xl md:text-2xl font-montserrat font-bold text-blue-600 dark:text-blue-400 mb-6">
              {category.category}
            </h3>
            <div className="flex flex-col gap-6">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md"
                >
                  <div className="flex items-center gap-4 w-40">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="font-raleway text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  <div className="relative flex-grow h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 -mr-8 text-xs font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {`${skill.level}%`}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
