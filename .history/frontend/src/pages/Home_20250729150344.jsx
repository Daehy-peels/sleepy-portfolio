// frontend/src/pages/Home.jsx

import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="py-20 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 dark:text-blue-300 animate-fade-in">
        Hi, I'm <span className="text-white dark:text-gray-900">Your Name</span>
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-medium text-gray-300 dark:text-gray-700 animate-slide-up">
        A passionate MERN Stack Developer
      </p>
      <div className="mt-8">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg
                     transition-all duration-300 transform hover:scale-105 shadow-lg
                     dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
