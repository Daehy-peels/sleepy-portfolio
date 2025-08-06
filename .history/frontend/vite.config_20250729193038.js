// frontend/vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // We're relying on Vite to auto-detect postcss.config.js now
    // The tailwindcss plugin configuration is removed from here
  ],
});
