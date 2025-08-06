// frontend/src/App.jsx

import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // State to manage the current theme (default to 'dark' or user's preference)
  const [theme, setTheme] = useState(() => {
    // Check localStorage for a saved theme, otherwise default to 'dark'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark"; // Default to dark mode
  });

  // useEffect to apply/remove the 'dark' class on the document's html element
  useEffect(() => {
    const root = document.documentElement; // Get the root html element
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save the current theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Rerun this effect whenever the theme state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    // Add `theme` and `toggleTheme` props to Navbar to pass the toggle functionality
    <div className="min-h-screen flex flex-col bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />{" "}
      {/* Pass theme props */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Placeholder for now */}
        <h1 className="text-4xl font-extrabold text-center mt-20">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-center mt-4">
          Building a stunning MERN stack showcase!
        </p>
      </main>
      <Footer theme={theme} />{" "}
      {/* Pass theme to Footer for potential styling */}
    </div>
  );
}

export default App;
