// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Use 'Montserrat' for titles and headings
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        // Use 'Raleway' for body text
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
