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
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(err);
    // Handle invalid ID format (e.g., if ID is not a valid MongoDB ObjectId)
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid Project ID format" });
    }
    res.status(500).json({ message: "Server Error: Could not fetch project" });
  }
});

// --- CREATE a new project (Admin Only) ---
// POST /api/projects
router.post("/", async (req, res) => {
  const {
    title,
    description,
    imageUrl,
    githubLink,
    liveDemoLink,
    completionDate,
  } = req.body;
  //Basic Validation
  if (
    !title ||
    !description ||
    !technologies ||
    !Array.isArray(technologies) ||
    technologies.length === 0
  ) {
    return res.status(400).json({
      message:
        "Please provide title, description, and technologies (as an array) for the project.",
    });
  }
  try {
    const newProject = new Project({
      title,
      description,
      technologies,
      imageUrl,
      githubLink,
      liveDemoLink,
      completionDate: completionDate || Date.now(), // Use provided date or default to now
    });
    const savedProject = await newProject.save(); // Save the new project to the database
    res.status(201).json(savedProject); // Send the saved project back with 201 Created status
  } catch (error) {
    res.status(500).json({ message: "Server Error: Could not create project" });
  }
});

// --- UPDATE an existing project (Admin Only) ---
// PUT /api/projects/:id
router.put('')
