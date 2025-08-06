/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: This 'content' array tells Tailwind where to find your classes.
  // It MUST be configured correctly.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial for React projects
  ],
  // Enable dark mode based on a class (the 'dark' class on the HTML element)
  darkMode: "class",
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc., here if needed
    },
  },
  plugins: [],
};
