// frontend/src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      {" "}
      {/* Wrap everything with Router */}
      <div className="min-h-screen flex flex-col bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 transition-colors duration-500">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            {" "}
            {/* Define your routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            {/* You can add a 404 Not Found route here later if needed */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
