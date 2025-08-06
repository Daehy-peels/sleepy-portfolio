// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: Tell Tailwind where your code using Tailwind classes lives
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all JS/TS/JSX/TSX files in src/ and its subdirectories
  ],
  // IMPORTANT: Enable dark mode based on a class (the 'dark' class on the HTML element)
  darkMode: "class",
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc., here if needed
      // For example:
      // colors: {
      //   'custom-blue': '#1a2b3c',
      // },
    },
  },
  plugins: [],
}