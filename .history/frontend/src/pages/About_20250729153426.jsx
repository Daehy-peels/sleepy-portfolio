// frontend/src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Add padding here */}
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 dark:text-blue-300">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-xl">
        {" "}
        {/* This div has its own padding/width */}
        <p className="text-lg text-gray-300 dark:text-gray-700 leading-relaxed mb-4">
          Hello! I'm [Your Name], a dedicated MERN Stack Developer...
        </p>
        {/* ... rest of the content */}
      </div>
    </section>
  );
};

export default About;
