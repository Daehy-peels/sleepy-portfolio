// frontend/src/pages/Skills.jsx

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa"; // Example icons

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <FaJs />, color: "text-yellow-500" }, // Using FaJs for Express
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-600" },
  { name: "JavaScript (ES6+)", icon: <FaJs />, color: "text-yellow-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: <FaCss3Alt />, color: "text-teal-400" }, // Using FaCss3Alt for Tailwind
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-red-500" },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 dark:text-blue-300">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg shadow-xl text-center
                       transform hover:scale-105 transition-transform duration-300
                       flex flex-col items-center justify-center space-y-3"
          >
            <span className={`text-5xl ${skill.color}`}>{skill.icon}</span>
            <p className="text-lg font-semibold text-white dark:text-gray-900">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
