// frontend/src/pages/Home.jsx

import React, { useState, useEffect, useRef } from "react";
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

import pfp from "../assets/pfp.png";
import "./Home.css"; // Import the CSS for space background

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
  const homeSectionRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex]; // Corrected: access array element by index

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(150);
        if (displayedText.length === currentRole.length) {
          setIsDeleting(true);
          setTypingSpeed(1500); // Pause before deleting
        }
      } else {
        setDisplayedText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(75);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Pause before typing next role
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]); // Added 'roles' to dependencies

  // Star and Shooting Star generation
  useEffect(() => {
    const generateStars = (count) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1; // Size between 1px and 3px
        const x = Math.random() * 100; // Percentage based position
        const y = Math.random() * 100;
        newStars.push({ size, x, y, id: Math.random() });
      }
      setStars(newStars);
    };

    const generateShootingStars = (count) => {
      const newShootingStars = [];
      for (let i = 0; i < count; i++) {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        // Adjusted distance calculation to ensure movement across the screen
        const distanceX = Math.random() * 60 + 30; // Min 30%, Max 90% horizontal travel
        const distanceY = Math.random() * 20 + 10; // Min 10%, Max 30% vertical travel (for diagonal)

        // Randomly choose direction (left-to-right or right-to-left)
        const directionX = Math.random() > 0.5 ? 1 : -1;
        // Randomly choose vertical direction
        const directionY = Math.random() > 0.5 ? 1 : -1;

        const endX = startX + (distanceX * directionX);
        const endY = startY + (distanceY * directionY);

        const size = Math.random() * 3 + 2; // Size between 2px and 5px
        const speed = Math.random() * 2 + 1; // Animation speed
        const delay = Math.random() * 5; // Animation delay

        newShootingStars.push({ id: Math.random(), startX, startY, endX, endY, size, speed, delay });
      }
      setShootingStars(newShootingStars);
    };

    generateStars(200); // Generate initial stars
    generateShootingStars(5); // Generate initial shooting stars

    const intervalId = setInterval(() => {
      setShootingStars((prev) => [...prev.slice(1), generateNewShootingStar()]); // Keep a few, add a new one
    }, 3000); // Create a new shooting star every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const generateNewShootingStar = () => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const distanceX = Math.random() * 60 + 30;
    const distanceY = Math.random() * 20 + 10;
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    const endX = startX + (distanceX * directionX);
    const endY = startY + (distanceY * directionY);
    const size = Math.random() * 3 + 2;
    const speed = Math.random() * 2 + 1;
    const delay = Math.random() * 5;
    return { id: Math.random(), startX, startY, endX, endY, size, speed, delay };
  };

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
      glowColor: "#4CAF50", // Green glow
    },
    {
      icon: <SiExpress />,
      label: "Express.js",
      hoverClass: "hover:text-gray-300 dark:hover:text-white", // Express often uses more neutral colors
      glowColor: "#FFFFFF", // White glow
    },
    {
      icon: <DiReact />,
      label: "React",
      hoverClass: "hover:text-blue-400",
      glowColor: "#61DAFB", // React blue glow
    },
    {
      icon: <DiNodejsSmall />,
      label: "Node.js",
      hoverClass: "hover:text-green-600",
      glowColor: "#8CC84B", // Node.js green glow
    },
  ];

  return (
    <section
      ref={homeSectionRef}
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-gray-900 to-black dark:from-neutral-100 dark:to-neutral-300 transition-colors duration-500"
    >
      {/* Starry Background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute bg-white rounded-full animate-pulse"
          style={{ width: `${star.size}px`, height: `${star.size}px`, left: `${star.x}%`, top: `${star.y}%` }}
        ></div>
      ))}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star absolute bg-white shadow-white"
          style={{
            "--start-x": `${star.startX}%`,
            "--start-y": `${star.startY}%`,
            "--end-x": `${star.endX}%`,
            "--end-y": `${star.endY}%`,
            width: `2px`, // Width of the streak
            height: `${star.size}px`, // Length of the streak
            // Initial position for the animation to start from
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            animationDuration: `${star.speed + 1}s`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
      <motion.div
        className="relative z-10 p-6 rounded-lg bg-transparent max-w-4xl mx-auto"
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
                dark:hover:drop-shadow-[0_0_15px_rgba(150,150,150,0.7)]`} // Generic light gray glow for dark mode
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