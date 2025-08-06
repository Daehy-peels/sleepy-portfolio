// frontend/src/pages/About.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/pfp.png";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shortBio =
    "I'm a passionate and highly motivated MERN stack developer with a strong foundation in modern web technologies. I specialize in building responsive, scalable, and user-friendly applications from the ground up.";
  const longBio =
    "I have a proven track record of bringing complex projects to life, from initial concept to deployment. My expertise spans across frontend technologies like React and Tailwind CSS for creating engaging user interfaces, and backend systems using Node.js, Express, and MongoDB for robust and efficient server-side logic. I am a lifelong learner who enjoys tackling new challenges and staying up-to-date with the latest industry trends. My goal is to create impactful solutions that are not only functional but also a joy to use. I am a collaborative team player and a critical thinker who is always eager to contribute to projects that make a difference.";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const personalInfo = [
    { label: "Full Name", value: "Myat Bhone Kyaw" },
    { label: "Date of Birth", value: "15/05/2003" },
    { label: "Phone", value: "+95 094-4802-3128" },
    { label: "Email", value: "sleepytothehead@gmail.com" },
    { label: "Address", value: "Yangon, Myanmar" },
    { label: "Nationality", value: "Your Nationality" },
  ];

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
        className="text-3xl md:text-4xl font-montserrat font-bold text-black dark:text-white mb-12 tracking-tight"
      >
        About Me
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-saturate-150 p-8 rounded-lg shadow-xl border border-gray-300/50 dark:border-gray-700/50 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-6 md:mb-0 shadow-lg border-4 border-gray-300 dark:border-gray-600"
            />
            <motion.div
              variants={containerVariants}
              className="text-left font-raleway flex-1"
            >
              <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl mb-4">
                {shortBio}
              </p>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-700 dark:text-gray-300 mb-4"
                >
                  {longBio}
                </motion.p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleExpanded}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={infoVariants}
          className="w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-saturate-150 p-8 rounded-lg shadow-xl border border-gray-300/50 dark:border-gray-700/50 transition-all duration-500 text-left"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
            Personal Information
          </h3>
          <ul className="space-y-4">
            {personalInfo.map((info) => (
              <li
                key={info.label}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {info.label}:
                </span>
                <span className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                  {info.value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
