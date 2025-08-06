// frontend/src/App.jsx

import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar /> {/* Render Navbar */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Placeholder for now */}
        <h1 className="text-4xl font-extrabold text-center mt-20">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-center mt-4">
          Building a stunning MERN stack showcase!
        </p>
      </main>
      <Footer /> {/* Render Footer */}
    </div>
  );
}

export default App;
