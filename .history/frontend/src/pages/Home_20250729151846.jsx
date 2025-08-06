// frontend/src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import social icons
import { motion } from 'framer-motion'; // For animations

const Home = () => {
  const roles = ["MERN Stack Developer", "Full-Stack Developer", "Web Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Initial typing speed

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

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
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);


  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay for children animations
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

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:youremail@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="py-20 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[calc(100vh-80px)]"> {/* Adjusted min-height */}

      {/* Background Gradient Animation - A subtle touch */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-50">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-10 left-10"></div>
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 absolute bottom-20 right-10"></div>
        <div className="bg-gradient-to-br from-pink-500 to-red-600 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute top-40 -left-20"></div>
      </div>


      <motion.div
        className="relative z-10 p-6 rounded-lg bg-transparent" // Added padding and transparency
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image (replace with your image path) */}
        <motion.img
          src="/your-profile-picture.jpg" // <--- REPLACE THIS WITH YOUR IMAGE PATH (e.g., in /public folder)
          alt="Your Name"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-400 dark:border-blue-300 shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }} // Framer Motion hover effect
        />

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-400 dark:text-blue-300"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-white dark:text-gray-900">Your Name</span>
        </motion.h1>

        {/* Typing Effect Tagline */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-medium text-gray-300 dark:text-gray-700 h-10 flex items-center justify-center" // Fixed height for typing effect
          variants={itemVariants}
        >
          A passionate {displayedText}
          <span className="inline-block w-1 h-8 bg-blue-400 dark:bg-blue-300 ml-1 animate-blink"></span> {/* Blinking cursor */}
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          className="mt-8 flex justify-center space-x-6 text-3xl"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-500
                         transition-colors duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label={link.label}
              whileHover={{ y: -5, scale: 1.2 }} // Framer Motion hover effect
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div className="mt-12" variants={itemVariants}>
          <a
            href="/projects" // Changed to /projects for react-router-dom
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg
                       transition-all duration-300 transform hover:scale-105 shadow-lg
                       dark:bg-blue-500 dark:hover:bg-blue-600 inline-flex items-center space-x-2"
          >
            <span>View My Work</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;