// frontend/postcss.config.js

export default {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: "class",
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    },
    autoprefixer: {},
  },
};
