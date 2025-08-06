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