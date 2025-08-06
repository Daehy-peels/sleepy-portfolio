// frontend/postcss.config.js

export default {
  plugins: {
    "@tailwindcss/postcss": {
      // This is the core Tailwind v4 plugin
      darkMode: "class", // Define dark mode strategy here
      content: [
        // Define content paths here
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    },
    autoprefixer: {},
  },
};
