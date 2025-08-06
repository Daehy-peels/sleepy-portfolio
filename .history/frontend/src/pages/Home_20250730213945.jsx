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
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

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

  // Effect for generating and managing stars
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

    const generateInitialShootingStars = (count) => {
      const newShootingStars = [];
      for (let i = 0; i < count; i++) {
        newShootingStars.push(generateNewShootingStar(true)); // Pass true to generate a starting point
      }
      setShootingStars(newShootingStars);
    };

    generateStars(200); // Generate initial static stars
    generateInitialShootingStars(5); // Generate initial shooting stars

    // Continuously add new shooting stars
    const intervalId = setInterval(() => {
      setShootingStars((prev) => [
        ...prev.slice(-4),
        generateNewShootingStar(),
      ]); // Keep max 5, add a new one
    }, 3000); // Create a new shooting star every 3 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  const generateNewShootingStar = (initial = false) => {
    let startX, startY;

    if (initial) {
      // For initial generation, start anywhere
      startX = Math.random() * 100;
      startY = Math.random() * 100;
    } else {
      // For continuous generation, start from an edge to ensure visible streaks
      const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      if (edge === 0) {
        // Top edge
        startX = Math.random() * 100;
        startY = -10; // Start slightly above the screen
      } else if (edge === 1) {
        // Right edge
        startX = 110; // Start slightly right of the screen
        startY = Math.random() * 100;
      } else if (edge === 2) {
        // Bottom edge
        startX = Math.random() * 100;
        startY = 110; // Start slightly below the screen
      } else {
        // Left edge
        startX = -10; // Start slightly left of the screen
        startY = Math.random() * 100;
      }
    }

    // Determine direction
    const angle = (Math.random() * Math.PI) / 2 + (initial ? 0 : Math.PI / 4); // Vary angle more for diagonal motion
    const distance = Math.random() * 70 + 80; // Ensure it travels a significant distance (80-150 units)

    let endX = startX + distance * Math.cos(angle);
    let endY = startY + distance * Math.sin(angle);

    // Ensure stars eventually leave the screen
    if (endX < -20 || endX > 120 || endY < -20 || endY > 120) {
      // If the calculated end point is already off-screen, ensure it travels
      // to a point further off-screen in the same general direction.
      // This part is a bit tricky to get perfectly random yet ensuring exit,
      // so we might just let the animation handle disappearing once off-screen.
      // For now, let's ensure the initial angle makes them exit.
    }

    const size = Math.random() * 3 + 2; // Size between 2px and 5px
    const speed = Math.random() * 3 + 2; // Animation speed (2-5 seconds)
    const delay = Math.random() * 5; // Animation delay (0-5 seconds)

    return {
      id: Math.random(),
      startX,
      startY,
      endX,
      endY,
      size,
      speed,
      delay,
    };
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
      glowColor: "rgba(34, 197, 94, 0.7)", // green-500 equivalent
    },
    {
      icon: <SiExpress />,
      label: "Express.js",
      hoverClass: "hover:text-gray-300 dark:hover:text-gray-100", // Express is often grey
      glowColor: "rgba(100, 100, 100, 0.7)", // light gray equivalent
    },
    {
      icon: <DiReact />,
      label: "React.js",
      hoverClass: "hover:text-blue-400",
      glowColor: "rgba(96, 165, 250, 0.7)", // blue-400 equivalent
    },
    {
      icon: <DiNodejsSmall />,
      label: "Node.js",
      hoverClass: "hover:text-green-600",
      glowColor: "rgba(22, 163, 74, 0.7)", // green-600 equivalent
    },
  ];

  return (
    <section
      id="home"
      className="py-20 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8"
    >
      {/* Starry Background divs */}
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
            animationDuration: `${star.speed}s`, // Use star.speed directly for duration
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
                    hover:drop-shadow-[0_0_20px_rgba(66,153,225,0.7)] dark:hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]" /* Tailwind blue glow */
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
                    hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] dark:hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]" /* Blue glow */
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
