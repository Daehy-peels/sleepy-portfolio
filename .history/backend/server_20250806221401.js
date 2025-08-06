// backend/server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Import routes
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
app.use("/api/projects", projectRoutes); // Projects API endpoints will start with /api/projects
app.use("/api/messages", messageRoutes); // Messages API endpoints will start with /api/messages

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Vercel requires a specific export for serverless functions ---
// We export the app instance instead of calling app.listen()
module.exports = app;
