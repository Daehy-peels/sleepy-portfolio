// frontend/src/components/Navbar.jsx

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
        >
          Sleepyhead.dev
        </a>
        <div className="space-x-6 hidden md:flex">
          {" "}
          {/* Hidden on small screens, flex on medium and up */}
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
          >
            Contact
          </a>
        </div>
        {/* Mobile menu button will go here later */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
