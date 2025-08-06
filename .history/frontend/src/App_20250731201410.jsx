// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Dummy page components for routing
const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center text-4xl dark:text-white">
    Home Page
  </div>
);
const AboutPage = () => (
  <div className="min-h-screen flex items-center justify-center text-4xl dark:text-white">
    About Page
  </div>
);
const ProjectsPage = () => (
  <div className="min-h-screen flex items-center justify-center text-4xl dark:text-white">
    Projects Page
  </div>
);
const SkillsPage = () => (
  <div className="min-h-screen flex items-center justify-center text-4xl dark:text-white">
    Skills Page
  </div>
);
const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center text-4xl dark:text-white">
    Contact Page
  </div>
);

function App() {
  // Theme state logic
  const [theme, setTheme] = useState(() => {
    // Check local storage for saved theme, default to 'dark' if not found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    // Apply or remove dark class on HTML element based on theme state
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
