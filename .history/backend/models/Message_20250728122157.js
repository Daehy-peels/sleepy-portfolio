// backend/models/Message.js

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
      trim: true,
    },
    senderEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // Stores emails in lowercase
      match: [
        /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Please fill a valid email address",
      ], // Basic email regex validation
    },
    subject: {
      type: String,
      required: false, // Subject might be optional
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` timestamps
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
