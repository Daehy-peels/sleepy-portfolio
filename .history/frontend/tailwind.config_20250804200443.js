/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line
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
