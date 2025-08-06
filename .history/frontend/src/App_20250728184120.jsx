// frontend/src/App.jsx

import React from "react";
// We'll import Navbar, Home, Projects, etc. here as we create them
import Navbar from './components/Navbar'; // Will be imported later
// import Home from './pages/Home'; // Will be imported later
// import Projects from './pages/Projects'; // Will be imported later
// import Contact from './pages/Contact'; // Will be imported later
// import Footer from './components/Footer'; // Will be imported later

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar will go here */}
      {/* <Navbar /> */}

      {/* Main content area - will be dynamically rendered based on routes */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Placeholder for now */}
        <h1 className="text-4xl font-extrabold text-center mt-20">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-center mt-4">
          Building a stunning MERN stack showcase!
        </p>
      </main>

      {/* Footer will go here */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
