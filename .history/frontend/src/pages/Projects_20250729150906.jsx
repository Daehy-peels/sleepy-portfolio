// frontend/src/pages/Projects.jsx

import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 dark:text-blue-300">
        My Projects
      </h2>
      <p className="text-xl text-center text-gray-300 dark:text-gray-700">
        (Projects will be fetched from your backend API here)
      </p>
      {/* Placeholder for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Example Project Card - will be replaced with dynamic data */}
        <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-white dark:text-gray-900">
            Project Title
          </h3>
          <p className="text-gray-400 dark:text-gray-600 mb-4">
            A brief description of the project.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
              React
            </span>
            <span className="bg-green-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-800">
              Node.js
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 dark:text-blue-600 dark:hover:text-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 dark:text-blue-600 dark:hover:text-blue-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
        {/* End Example Project Card */}
      </div>
    </section>
  );
};

export default Projects;
