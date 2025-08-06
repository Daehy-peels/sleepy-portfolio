// frontend/src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 dark:text-blue-300">
        About Me
      </h2>
      {/* Changed dark:bg-gray-100 to dark:bg-neutral-200 */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 dark:bg-neutral-200 rounded-lg shadow-xl">
        {/* Changed dark:text-gray-700 to dark:text-neutral-700 */}
        <p className="text-lg text-gray-300 dark:text-neutral-700 leading-relaxed mb-4">
          Hello! I'm [Your Name], a dedicated MERN Stack Developer...
        </p>
        <p className="text-lg text-gray-300 dark:text-neutral-700 leading-relaxed mb-4">
          I specialize in crafting engaging user interfaces with React,
          developing powerful server-side logic with Node.js and Express, and
          managing data with MongoDB. I'm always eager to learn new technologies
          and improve my craft, focusing on clean code, efficient solutions, and
          user-centric design.
        </p>
        <p className="text-lg text-gray-300 dark:text-neutral-700 leading-relaxed">
          When I'm not coding, you can find me [mention a hobby, e.g., exploring
          new tech blogs, hiking, playing chess]. I'm excited to leverage my
          skills to build impactful and innovative projects. Let's connect!
        </p>
      </div>
    </section>
  );
};

export default About;
