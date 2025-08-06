// backend/routes/messageRoutes.js

const express = require("express");
const router = express.Router();
const Message = require("../models/Message"); // Import the Message model

// --- POST a new message from the contact form ---
// POST /api/messages
router.post("/", async (req, res) => {
  const { senderName, senderEmail, subject, message } = req.body;

  // Basic validation
  if (!senderName || !senderEmail || !message) {
    return res
      .status(400)
      .json({ message: "Please provide your name, email, and message." });
  }

  try {
    const newMessage = new Message({
      senderName,
      senderEmail,
      subject,
      message,
    });

    const savedMessage = await newMessage.save();
    res
      .status(201)
      .json({ message: "Message sent successfully!", data: savedMessage });
  } catch (err) {
    console.error(err);
    // Handle specific Mongoose validation errors (e.g., invalid email format)
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Server Error: Could not send message" });
  }
});

// --- GET all messages (Admin Only - for you to view messages) ---
// GET /api/messages
// You might want to add authentication here later to secure this route
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error: Could not fetch messages" });
  }
});

// --- GET a single message by ID (Admin Only) ---
// GET /api/messages/:id
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid Message ID format" });
    }
    res.status(500).json({ message: "Server Error: Could not fetch message" });
  }
});

// --- DELETE a message (Admin Only) ---
// DELETE /api/messages/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }
    res
      .status(200)
      .json({ message: "Message deleted successfully", deletedMessage });
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid Message ID format" });
    }
    res.status(500).json({ message: "Server Error: Could not delete message" });
  }
});

module.exports = router;
