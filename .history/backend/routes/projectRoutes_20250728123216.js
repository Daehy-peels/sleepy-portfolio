// backend/routes/projectRoutes.js

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// --- GET all projects ---
// GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({
      completionDate: -1,
      createdAt: -1,
    }); // Get all projects, sorted by completion date (newest first)
    res.status(200).json(projects); //Send projects as JSON
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Server Error: Could not fetch projects" });
  }
});

// --- GET a single project by ID ---
// GET /api/projects/:id
router.get('/:id', async (req, res) => {
    try {
        const project =
    } catch (error) {
        
    }
})
