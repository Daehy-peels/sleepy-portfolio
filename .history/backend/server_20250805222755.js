// backend/server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path"); // Import the path module

// --- Serve Static Files ---
// This must be at the very top to ensure it catches static file requests first.
app.use(express.static(path.join(__dirname, "public")));

// --- Middleware ---
app.use(cors());
app.use(express.json());

//Import routes
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- API Routes ---
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
