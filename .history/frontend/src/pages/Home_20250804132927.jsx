// frontend/src/pages/Home.jsx

import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
    >
      <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Your Name Here
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        Web Developer | UX/UI Designer | Problem Solver
      </p>
      {/* You can add more content here like a profile picture, a short bio, etc. */}
    </section>
  );
};

export default Home;
