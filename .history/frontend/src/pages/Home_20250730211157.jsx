frontend/src/pages/Home.jsx

jsx
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

useEffect(() => {
let timer;
const currentRole = roles.currentRoleIndex;

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
    const distanceX = (Math.random() * 80 - 40) + (startX > 50 ? -50 : 50); // Tend towards edges
    const distanceY = (Math.random() * 80 - 40) + (startY > 50 ? -50 : 50);
    const endX = startX + distanceX;
    const endY = startY + distanceY;
    const size = Math.random() * 3 + 2; // Size between 2px and 5px
    const speed = Math.random() * 2 + 1; // Animation speed
    const delay = Math.random() * 5; // Animation delay
    newShootingStars.push({ id: Math.random(), startX, startY, endX, endY, distanceX, distanceY, size, speed, delay });
  }
  setShootingStars(newShootingStars);
};

generateStars(200); // Generate initial stars
generateShootingStars(5); // Generate initial shooting stars

const intervalId = setInterval(() => {
  setShootingStars((prev) => [...prev.slice(1), generateNewShootingStar()]); // Keep a few, add a new one
}, 3000); // Create a new shooting star every 3 seconds

return () => clearInterval(intervalId);