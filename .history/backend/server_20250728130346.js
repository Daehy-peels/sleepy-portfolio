require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Import routes
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Basic Route ---
app.get("/", (req, res) => {
  res.send("Hello from the MERN Portfolio Backend!");
});

// --- API Routes ---
app.use("/api/projects", projectRoutes); // Projects API endpoints will start with /api/projects
app.use("/api/messages", messageRoutes); // Messages API endpoints will start with /api/messages

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access it at: http://localhost:${PORT}`);
});
