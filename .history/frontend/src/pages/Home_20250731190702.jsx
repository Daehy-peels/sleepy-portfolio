// frontend/src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

import pfp from "../assets/pfp.png";

const Home = () => {
  const roles = [
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Web Enthusiast",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(150);
        if (displayedText.length === currentRole.length) {
          setIsDeleting(true);
          setTypingSpeed(1500);
        }
      } else {
        setDisplayedText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(75);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const techIcons = [
    {
      icon: <DiMongodb />,
      label: "MongoDB",
      hoverClass: "hover:text-green-500",
      glowColor: "rgba(34, 197, 94, 0.7)",
    },
    {
      icon: <SiExpress />,
      label: "Express.js",
      hoverClass: "hover:text-gray-300 dark:hover:text-gray-100",
      glowColor: "rgba(100, 100, 100, 0.7)",
    },
    {
      icon: <DiReact />,
      label: "React.js",
      hoverClass: "hover:text-blue-400",
      glowColor: "rgba(96, 165, 250, 0.7)",
    },
    {
      icon: <DiNodejsSmall />,
      label: "Node.js",
      hoverClass: "hover:text-green-600",
      glowColor: "rgba(22, 163, 74, 0.7)",
    },
  ];

  // Using the variable for consistency.
  // You confirmed 72px is likely the height from a previous screenshot or measurement.
  const NAVBAR_HEIGHT = "72px";

  return (
    <section
      id="home"
      // Using the NAVBAR_HEIGHT variable for calculation
      className="flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT})` }} // Corrected to use NAVBAR_HEIGHT
    >
      {/* Removed Starry Background divs entirely to avoid ReferenceErrors */}
      {/* These lines caused the error because stars and shootingStars were undefined
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        ></div>
      ))}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            "--start-x": `${star.startX}vw`,
            "--start-y": `${star.startY}vh`,
            "--end-x": `${star.endX}vw`,
            "--end-y": `${star.endY}vh`,
            width: `${100}px`,
            height: `${star.size}px`,
            top: `0`,
            left: `0`,
            animationDuration: `${star.speed}s`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
      */}

      <motion.div
        // Adding py-20 back to the inner div to give content vertical spacing,
        // as the section itself no longer has it and is just for layout.
        className="relative z-10 p-6 rounded-lg bg-transparent max-w-4xl mx-auto py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Glow on Hover */}
        <motion.img
          src={pfp}
          alt="Your Name"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover
                    border-4 border-blue-400 dark:border-blue-300 shadow-lg
                    transition-all duration-300 ease-in-out
                    hover:drop-shadow-[0_0_20px_rgba(66,153,225,0.7)] dark:hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        />

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-400 dark:text-blue-300"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="text-white dark:text-gray-900">Your Name</span>
        </motion.h1>

        {/* Typing Effect Tagline */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-medium text-gray-300 dark:text-gray-700 h-10 flex items-center justify-center"
          variants={itemVariants}
        >
          A passionate {displayedText}
          <span className="inline-block w-1 h-8 bg-blue-400 dark:bg-blue-300 ml-1 animate-blink"></span>
        </motion.p>

        {/* MERN Stack Icons with Custom Glow on Hover */}
        <motion.div
          className="mt-8 flex justify-center space-x-6 text-3xl"
          variants={itemVariants}
        >
          {techIcons.map((tech) => (
            <motion.a
              key={tech.label}
              href="#"
              className={`text-gray-300 dark:text-gray-700 ${tech.hoverClass}
                transition-all duration-300 transform hover:scale-125 hover:-translate-y-1
                hover:drop-shadow-[0_0_15px_${tech.glowColor}]
                dark:hover:drop-shadow-[0_0_15px_${tech.glowColor}]`}
              aria-label={tech.label}
              whileHover={{ y: -5, scale: 1.2 }}
            >
              {tech.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action Button with Glow on Hover */}
        <motion.div className="mt-12" variants={itemVariants}>
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg
                    transition-all duration-300 transform hover:scale-105 shadow-lg
                    dark:bg-blue-500 dark:hover:bg-blue-600 inline-flex items-center space-x-2
                    hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] dark:hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]"
          >
            <span>View My Work</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
