// backend/server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path"); // Import the path module

//Import routes
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
// Place these before the static file middleware
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);

// --- Serve Static Files ---
// This middleware must be placed after your API routes.
app.use(express.static(path.join(__dirname, "public")));

// --- Optional: A basic route for the root endpoint ---
app.get("/", (req, res) => {
  res.send("Hello from the MERN Portfolio Backend!");
});

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
