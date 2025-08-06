// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Use 'Poppins' for titles and headings
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        // Use 'Inter' for body text
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
