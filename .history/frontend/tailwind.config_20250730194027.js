/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // IMPORTANT: Enable dark mode based on a class (the 'dark' class on the HTML element)
  darkMode: "class",
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc., here if needed
    },
  },
  plugins: [],
};
