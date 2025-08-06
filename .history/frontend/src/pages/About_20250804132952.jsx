// frontend/src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
        About Me
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
};

export default About;
