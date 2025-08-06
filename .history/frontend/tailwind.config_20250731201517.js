// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial for scanning your components
  ],
  darkMode: "class", // Enable dark mode based on 'dark' class on HTML element
  theme: {
    extend: {},
  },
  plugins: [],
};
